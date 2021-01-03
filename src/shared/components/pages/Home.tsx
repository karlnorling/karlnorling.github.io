import React from 'react';
import { Main } from '../layout/Main';
import { Nav } from '../menu/Nav';
import { Headline, Letter } from './Headline';

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
  </Main>
);