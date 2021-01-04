import App from '../shared/App';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import Koa from 'koa';
import serve from 'koa-static';
import helmet from 'koa-helmet';
import Router from 'koa-router';
import { renderToString } from 'react-dom/server';
const { v4: uuid } = require('uuid');
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const router = new Router();

router.get(
  '/(.*)',
  (ctx, next) => {
    const context = {};
    const markup = renderToString(
      <StaticRouter context={context} location={ctx.url}>
        <App />
      </StaticRouter>
    );
    ctx.state.markup = markup;
    return context.url ? ctx.redirect(context.url) : next();
  },
  ctx => {
    const nonce = uuid();
    ctx.status = 200;
    ctx.set('Content-Security-Policy', `default-src * 'unsafe-inline' 'unsafe-eval'; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src *; style-src * 'unsafe-inline';`);
    ctx.body = `
    <!doctype html>
      <html lang="">
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Karl Norling</title>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="/css/normalize.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap" rel="stylesheet">
        <link href="/css/main.css" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${  
          process.env.NODE_ENV === 'production'
            ? `<script src="${assets.client.js}" defer crossorigin></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
      </head>
      <body>
        <div id="root">${ctx.state.markup}</div>
      </body>
    </html>`;
  }
);

// Intialize and configure Koa application
const server = new Koa();
server
  .use(helmet())
  .use(serve(process.env.RAZZLE_PUBLIC_DIR))
  .use(router.routes())
  .use(router.allowedMethods());

export default server;