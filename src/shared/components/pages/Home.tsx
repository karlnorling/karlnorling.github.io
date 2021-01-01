import React, { useState } from 'react';
import { Main } from '../layout/Main';
import { Nav } from '../menu/Nav';
import styled, { keyframes } from 'styled-components';
import { Headline } from './Headline';

const slideDown = keyframes`
{
  0% {
    -webkit-transform: translateY(-110%);
            transform: translateY(-110%);
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}`;

const Intro = styled(Headline)`
  animation: ${slideDown} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`;

export const Home = () => {
  const [showIntro, setShowIntro] = useState(true);
  const content = showIntro ? (<Intro onClick={() => setShowIntro(false)}>Hello World</Intro>) : null;
  return (
    <Main>
      {content}
      <Nav />
    </Main>
  );
};
 

