import React from 'react';
import { Main } from '../layout/Main';
import { Nav } from '../menu/Nav';
import { Headline, Letter } from './Headline';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

const letters: Letter[] = 'Experience'.split('').map(letter => ({
  letter,
  delay: Math.round((Math.random()*250))
}));

const ContentWrapper = styled.section`
  width: 820px;
  margin: 0 auto 20px auto;
  display: flex;
  justify-content: space-between;
`;
const Timeline = styled.section`
  display: flex;
  flex: 0 0 610px;
  flex-direction: column;
`;
const TimelineNav = styled.nav`
  display: block;
  flex: 0 0 190px;
  background: linear-gradient(134deg,rgba(255,255,255,1) 0%, rgba(255,255,255,1) 80%, rgba(0,0,1,.01) 100%);
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.27);
  margin: 20px 0 0 0;
  padding: 20px;
  box-sizing: border-box;
`;
const TimelineNavTitle = styled.h4`
  font-size: 18px;
  font-weight: 300;
  margin: 0 0 20px 0;
  padding: 0;
`;
interface TimelineNavListProps {
  showMonths?: Boolean;
}
const TimelineNavList = styled.ol<TimelineNavListProps>`
  list-style: none;
  margin: 0;
  padding: 0;
  display: ${({ showMonths = true }) => showMonths ? 'block' : 'none'};
`;
const TimelineNavItem = styled.li`
  list-style: none;
  margin: 0 0 10px 0;
  padding: 0;
  ol {
    margin: 10px 0;
  }
  ol li {
    text-indent: 10px;
  }
`;
const TimelineNavLink = styled(Link)`
  color: #deac14;
  text-decoration: none;
  &:visited,
  &:active,
  &:hover {
    text-decoration: none;
    color: #deac14;
  };
  &:hover {
    color: #ffcc33;
  }
`;
const TimelineEntry = styled.article`
  font-size: 16px;
  font-weight: 300;
  color: #333;
  background: linear-gradient(134deg,rgba(255,255,255,1) 0%, rgba(255,255,255,1) 80%, rgba(0,0,1,.01) 100%);
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.27);
  margin: 20px 0 0 0;
  padding: 20px;
  box-sizing: border-box;
`;
const Company = styled.h4`
  font-size: 22px;
  font-weight: 300;
  color: #333;
  margin: 0 0 20px 0;
  padding: 0;
`;
const Role = styled.em`
  font-weight: 300;
  font-size: 18px;
  font-style: normal;
  margin: 5px 0;
`;
const Location = styled.address`
  font-weight: 300;
  font-size: 18px;
  font-style: normal;
  margin: 5px 0;
`;
const Dates = styled.time`
  font-weight: 200;
  font-size: 18px;
  font-style: normal;
  margin: 5px 0;
`;
const AccomplishmentWrapper = styled.ol`
  margin: 20px 0 0 0;
  padding 0;
`;
const Accomplishment = styled.li`
  margin: 7px 0 7px 20px;
  line-height: 1.3;
  list-style: disc;
`;

interface Entry {
  company: string;
  role: string;
  location: string;
  from: string;
  to: string;
  accomplishments: string[];
}

const timeLineEntries: Entry[] = [{
  company: 'Red Sift',
  role: 'Engineering Manager',
  location: 'London, UK',
  from: 'July 2019',
  to: 'Present',
  accomplishments: [
    'Security startup that focuses on email protection. Products are built on a custom cloud architecture (sifts) to help scale and develop products faster',
    'Managed team of application engineers, ran daily scrum, fortnightly sprint and retrospective',
    'Responsible for the platform application stack that served up our Sift products',
    'Setup OnCall/Rota for critical services according to ISO/IEC 27001 compliance',
    'Introduced best coding practices, via github review process, automated testing. Promoting TDD (test driven development)',
    'Setup monitoring for applications using DataDog. Log syntax for Papertrail. Added PagerDuty alerting for these monitors, log records'
  ]
}, {
  company: 'QuartetHealth',
  role: 'Lead Software Engineer',
  location: 'New York, NY, USA',
  from: 'July 2016',
  to: 'April 2019',
  accomplishments: [
    'Healthcare startup that connects doctors with mental health patients through referrals. Required to learn about HIPAA regulations. Collaborated with Product teams using Agile methodology to ensure HIPAA and technical requirements informed design and build decisions',
    'Recognized the need for several services, which led to driving Operational Excellence for the tech team: developed OpEx Reports for monitoring and alerting, plus process and standards for Correction of Error outages and on-call rotations. Leveraged SumoLogic, Kibana, Elastalerts (alert monitoring tool), and PagerDuty',
    'Ongoing development of features and maintaining applications written in NodeJS with a React client written in TypeScript',
    'Improved CI pipeline to speed up the time to deploy code to production, including setup of code review processes in Github and Jenkins build files. Deployed notifications via Jenkins though a Slack app',
    'Wrote custom Python scripts for backfills of production data. Established dry-run of scripts, reporting outputs from backfills, and rollback processes',
    'Most recently worked on Salesforce implementation for data synchronisation between Salesforce.com and internal backend data store system'
  ]
}, {
  company: 'Gilt Groupe',
  role: 'Senior Software Engineer',
  location: 'New York, NY, USA',
  from: 'July 2010',
  to: 'June 2016',
  accomplishments: [
    'As lead developer of the back office team: responsible for development, maintenance, and ongoing optimization of order processing, payment methods, localization tools, currency rates, shipping cost calculator, and harmonization of products',
    'Actively collaborated with product, marketing, and business owners to scope, evaluate, and prioritize work based on impact to the business',
    'Developed scripts for new services leveraging AWS CloudFormation templates, code deploy agent ELB, and EC2 instances to streamline app deployment process',
    'Implemented payment methods PayPal and Alipay, building frontend UI and backend functionality for processing of transactions, including capturing amounts and authorization',
    'Enabled shipping to 100+ countries as part of a 5-person development team supporting international scaling of business. Responsible for localization, currency conversion, and product harmonizations per country',
    'Implemented new features as Front End developer on website. Collaborated with product teams to validate design and provide technical expertise and input. Solely responsible for the ‘Add to Waitlist’ feature on the Order Confirmation page, encouraging customers to continue shopping, currently generating incremental revenue of $400k/month'
  ]
}, {
  company: 'Method Inc.',
  role: 'Senior Engineer',
  location: 'San Francisco, CA and New York, NY',
  from: 'August 2005',
  to: 'June 2010',
  accomplishments: [
    'Development led multi-disciplinary teams that designed and built websites and other online services for agency clients. Primarily worked in now-outdated technologies',
    'Got awarded a webby or two :)'
  ]
}];

const years = timeLineEntries.map(({ from }) => from.split(' ')
  .map((d) => d.trim()))
  .filter(Boolean)
  .map(date => {
    const [month, year] = date;
    return Number(year);
  })
  .sort((a, b) => a - b);

const startYear = years[0];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const getNavTimelineItems = () => {
  const endYear = new Date().getFullYear();
  const numOfYears = endYear - startYear;
  let years = [];
  for(let i = 0; i <= numOfYears; i++) {
    years.push({ year: endYear - i, months });
  }
  return years;
};

const navTimelineItems = getNavTimelineItems();

interface TimelineParams {
  year?: string;
  month?: string;
} 

export const Experience = (props: RouteComponentProps) => {
  const { match: { params } }: RouteComponentProps<TimelineParams> = props; 
  const yearParam = params.year;
  const monthParam = params.month;

  const timelineEntryEls = timeLineEntries.filter(entry => {
    const { from, to } = entry;
    const [fromMonth, fromYear] = from.split(' ');
    const [toMonth, toYear] = to.split(' '); // Check toYear === present - set now.
    const targetDate = new Date(`${yearParam}-${monthParam || 1}-1`);
    //if yearParam
    const fromDate = new Date(`${fromYear}-${fromMonth}-1`);
    const toDate = new Date(`${toYear}-${toMonth}-30`);
    if (fromDate.getTime() >= targetDate.getTime() && toDate.getTime() <= targetDate.getTime()) {
      console.log('show entry');
      console.log(fromDate.toString()); 
      console.log(toDate.toString()); 
      console.log(targetDate.toString()); 
    }
    return entry;
  }).map((entry, i) => {
    const { company, role, location, from, to, accomplishments } = entry;

    const accomplishmentEls = accomplishments.map((accomplishment, j) =>
      (<Accomplishment key={j}>{accomplishment}</Accomplishment>));

    return (
      <TimelineEntry key={i}>
        <Company>{company}</Company>
        <Role>{role}</Role>
        <Location>{location}</Location>
        <Dates>{from} to {to}</Dates>
        <AccomplishmentWrapper>{accomplishmentEls}</AccomplishmentWrapper>
      </TimelineEntry>
    );
  });

  const navTimelineItemEls = navTimelineItems.map(({ year, months }, i) => {
    const showMonths = (Number(yearParam) === year);
    const monthEls = months.map((month, i) => {
      const monthText = month;
      const monthNumber = (i+1 <= 9) ? `0${i+1}` : i+1; 
      return (
        <TimelineNavItem key={i}>
          <TimelineNavLink to={`/experience/${year}/${monthNumber}`}>{monthText}</TimelineNavLink>
        </TimelineNavItem>);
    });
    return (
      <TimelineNavItem key={i}>
        <TimelineNavLink to={`/experience/${year}`}>{year}</TimelineNavLink>
        <TimelineNavList showMonths={showMonths}>{monthEls}</TimelineNavList>
      </TimelineNavItem>);
  });
  return (
    <Main>
      <Headline hasCursor={true} letters={letters} />
      <Nav />
      <ContentWrapper>
      <TimelineNav>
        <TimelineNavTitle>
          Years
        </TimelineNavTitle>
        <TimelineNavList>{navTimelineItemEls}</TimelineNavList>
      </TimelineNav>
      <Timeline>
        {timelineEntryEls}
      </Timeline>
      </ContentWrapper>
    </Main>
  );
};
