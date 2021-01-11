import React from 'react';
import { Main } from '../layout/Main';
import { Nav } from '../menu/Nav';
import { Headline, Letter } from './Headline';
import styled from 'styled-components';

const letters: Letter[] = 'Skills'.split('').map(letter => ({
  letter,
  delay: Math.round((Math.random()*250))
}));

const ContentWrapper = styled.section`
  width: 820px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
`;
const Article = styled.article`
  width: 400px;
  background: linear-gradient(134deg,rgba(255,255,255,1) 0%, rgba(255,255,255,1) 80%, rgba(0,0,1,.01) 100%);
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.27);
  padding: 20px;
  box-sizing: border-box;
`;
const SkillTitle = styled.h2`
  font-size: 22px;
  font-weight: 300;
  margin: 0 0 20px 0;
`;
const SkillList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Skill = styled.li`
  margin: 5px 0;
  padding: 0;
  font-size: 16px;
  font-weight: 300;
`;

interface Item {
  name: string;
  years: number;
}

const languagesList: Item[] = [{
  name: 'Node',
  years: 5
}, {
  name: 'JavaScript',
  years: 10
}, {
  name: 'TypeScript',
  years: 4
}, {
  name: 'React.js',
  years: 4
}, {
  name: 'HTML',
  years: 10
}, {
  name: 'CSS',
  years: 10
}, {
  name: 'Python',
  years: 3
}, {
  name: 'Scala',
  years: 3
}, {
  name: 'Java',
  years: 3
}, {
  name: 'Mongo',
  years: 3
}, {
  name: 'PostgreSQL',
  years: 10
}];

const servicesList: Item[] = [{
  name: 'Docker',
  years: 3
}, {
  name: 'Kubernetes',
  years: 2
}, {
  name: 'AWS',
  years: 4
}, {
  name: 'Jenkins',
  years: 3
}, {
  name: 'CircleCI',
  years: 2
}, {
  name: 'Kibana',
  years: 4
}, {
  name: 'Grafana',
  years: 4
}, {
  name: 'Datadog',
  years: 2,
}, {
  name: 'Post-mortem',
  years: 8
}, {
  name: 'Scrum',
  years: 8
}, {
  name: 'Kanban',
  years: 7
}, {
  name: 'ROTA',
  years: 5
}, {
  name: 'E-commerce',
  years: 5
}, {
  name: 'Payment Systems',
  years: 5
}, {
  name: 'Payment Processing',
  years: 5
}, {
  name: 'Internationalizations',
  years: 5
}, {
  name: 'HIPAA',
  years: 3
}, {
  name: 'PCI',
  years: 5
}, {
  name: 'ISO/IEC 27001',
  years: 3
}];

const sortFn = (a: Item, b: Item) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
};

export const Skills = () => {
  const languages = languagesList.sort(sortFn).map(({name, years}) =>
    (<Skill key={name}>- {name} {years} years</Skill>));
  const services = servicesList.sort(sortFn).map(({name, years}) =>
    (<Skill key={name}>- {name} {years} years</Skill>));
  return (
    <Main>
      <Headline hasCursor={true} letters={letters} />
      <Nav />
      <ContentWrapper>
        <Article>
          <SkillTitle>Languages</SkillTitle>
          <SkillList>{languages}</SkillList>
        </Article>
        <Article>
          <SkillTitle>Services</SkillTitle>
          <SkillList>{services}</SkillList>
        </Article>
      </ContentWrapper>
    </Main>
  );
};
