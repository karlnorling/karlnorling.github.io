import React from 'react';
import { Main } from '../layout/Main';
import { Nav } from '../menu/Nav';
import { Headline, Letter } from './Headline';
import styled, { keyframes } from 'styled-components';

const letters: Letter[] = 'About me'.split('').map(letter => ({
  letter,
  delay: Math.round((Math.random()*250))
}));

const zoomIn = keyframes`
{
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 120px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.27);
  animation: ${zoomIn} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  zoom: 1;
`;

const Content = styled.article`
  background: linear-gradient(134deg,rgba(255,255,255,1) 0%, rgba(255,255,255,1) 80%, rgba(0,0,1,.01) 100%);
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.27);
  width: 820px;
  margin: 20px auto 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: 300;
  color: #333;
  margin: 20px 0 0 0;
  line-height: 1.4;
`;

interface Education {
  name: string;
  location: string;
  from: string;
  to: string;
  degree: string;
  information: string;
}

const educations: Education[] = [{
  name: 'Hyper Island',
  location: 'Karlskrona, Sweden',
  from: 'August 2004',
  to: 'May 2006',
  degree: 'Vocational Studies',
  information: 'Development led multi-disciplinary teams that designed and built websites and other online services for agency clients. Primarily worked in now-outdated technologies.'
}, {
  name: 'Blekinge Institute of Technology',
  location: 'Karlshamn, Sweden',
  from: 'August 2000',
  to: 'June 2004',
  degree: 'Bachelors in Computer Science',
  information: 'Information and communication technologies for development focused progam.'
}];

export const About = () => (
  <Main>
    <Headline hasCursor={true} letters={letters} />
    <Nav />
    <Content>
      <ProfileImage src="/public/images/head.jpg" alt="Karl Norling Face" />
      <Text>
        Problem solver by nature, love iterating upon solutions to come up with the most efficient one, both in programming and organisational settings. Pragmatic when it comes to tooling and solutions.
      </Text>
    </Content>
  </Main>
);

