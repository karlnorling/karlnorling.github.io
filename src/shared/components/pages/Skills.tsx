import React from 'react';
import { Main } from '../layout/Main';
import { Nav } from '../menu/Nav';
import { Headline, Letter } from './Headline';

const letters: Letter[] = 'Skills'.split('').map(letter => ({
  letter,
  delay: Math.round((Math.random()*250))
}));

export const Skills = () => (
  <Main>
    <Headline hasCursor={true} letters={letters} />
    <Nav />
  </Main>
);

