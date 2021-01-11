import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Wrapper = styled.nav`
  width: 820px;
  margin: 20px auto 0 auto;
`;
const NavEl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const NavItem = styled.li`
  text-align: center;
  width: 190px;
`;
const Link = styled(NavLink)`
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.27);
  background: #ffcc33;
  font-size: 20px;
  color: #333;
  text-decoration: none;
  padding: 10px 20px 12px 20px;
  display: block;
  font-weight: 100;
  &:visited,
  &:active,
  &:hover {
    text-decoration: none;
    color: #333;
  };
  &:hover {
    background: #ffb933;
  }
`;

const activeNav = {
  background: '#ffb933'
};

export const Nav = () => (
<Wrapper>
  <NavEl>
    <NavItem><Link to="/">Intro</Link></NavItem>
    <NavItem><Link to="/about" activeStyle={activeNav}>About me</Link></NavItem>
    <NavItem><Link to="/skills" activeStyle={activeNav}>Skills</Link></NavItem>
    <NavItem><Link to="/experience" activeStyle={activeNav}>Experience</Link></NavItem>
  </NavEl>
</Wrapper>
);
