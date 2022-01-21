import React from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <Nav>
      <Head>Star Wars!</Head>
      <Links>
        <PLink to="/people" style={{ textDecoration: 'none' }}>
          People
        </PLink>

        <WLink to="/worlds" style={{ textDecoration: 'none' }}>
          Worlds
        </WLink>
      </Links>
    </Nav>
  );
};
const Nav = styled.nav`
  padding-top: 1em;
  padding-bottom: 3em;
`;
const Head = styled.h1`
  font-family: 'Star Jedi', arial;
  font-size: 5em;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: yellow;
  background-color: transparent;
  color: black;
  margin: 1px;
`;
const Links = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: transparent;
  margin-bottom: 1em;
`;
const PLink = styled(Link)`
  color: black;
  font-size: 3em;
  font-family: 'Star Jedi', arial;
  text-decoration: none;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: yellow;
`;
const WLink = styled(Link)`
  text-decoration: none;
  font-size: 3em;
  font-family: 'Star Jedi', arial;
  color: black;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: yellow;
`;
export default NavBar;
