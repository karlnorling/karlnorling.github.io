import React from 'react';
import { Main } from '../layout/Main';
import { Nav } from '../menu/Nav';
import { Headline, Letter } from './Headline';
import styled from 'styled-components';

const Content = styled.article`
  background: linear-gradient(134deg,rgba(255,255,255,1) 0%, rgba(255,255,255,1) 80%, rgba(0,0,1,.01) 100%);
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.27);
  width: 820px;
  margin: 20px auto 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const letters: Letter[] = [{
    letter: 'H',
    delay: 120,
  }, {
    letter: 'i',
    delay: 110,
  }, {
    letter: ',',
    delay: 220
  }, {
    letter: ' ',
    delay: 220
  }, {
    letter: 'I',
    delay: 115
  }, {
    letter: '\'',
    delay: 105
  }, {
    letter: 'm',
    delay: 310
  }, {
    letter: ' ',
    delay: 110
  }, {
    letter: 'K',
    delay: 125
  }, {
    letter: 'a',
    delay: 110
  }, {
    letter: 'r',
    delay: 140
  }, {
    letter: 'l',
    delay: 160
  }];


export const Home = () => (
  <Main>
    <Headline hasCursor={true} letters={letters} />
    <Nav />
    <Content>
      
    </Content>
  </Main>
);