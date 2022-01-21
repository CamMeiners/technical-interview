import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
const People = () => {
  const [personData, setPersonData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people?page=1`)
      .then((data) => {
        setPersonData(data.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const getId = (person) => {
    let x = person?.url || '';
    let matches = x.match(/\d+/g);
    return matches;
  };
  return (
    <Container>
      {personData.map((person) => (
        <PeopleLink to={`/people/${getId(person)}`}>
          {person.name.toLowerCase()}
        </PeopleLink>
      ))}
    </Container>
  );
};
export default People;
const Container = styled.div`
  background-image: radial-gradient(#0000, black 99.9%);
  background-color: gray;
  margin: 0 25%;
  border-radius: 100px;
  height: 35em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const PeopleLink = styled(Link)`
  font-family: 'Star Jedi';

  padding: 0.4em;
  text-decoration: none;
  font-size: 1.2em;
  color: black;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: yellow;
`;
