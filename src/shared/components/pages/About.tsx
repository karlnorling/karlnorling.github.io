import React from 'react';
import { Main } from '../layout/Main';
import { Nav } from '../menu/Nav';
import { Headline, Letter } from './Headline';

const letters: Letter[] = 'About me'.split('').map(letter => ({
  letter,
  delay: Math.round((Math.random()*250))
}));

export const About = () => (
  <Main>
    <Headline hasCursor={true} letters={letters} />
    <Nav />
  </Main>
);

