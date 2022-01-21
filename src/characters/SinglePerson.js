import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const SinglePerson = () => {
  const [character, setCharacter] = useState();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((data) => {
        setCharacter(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const getHomeId = (person) => {
    let x = person?.homeworld || '';
    let matches = x.match(/\d+/g);
    return matches;
  };
  const [planetName, setPlanetName] = useState();
  const worldName = (person) => {
    axios
      .get(`https://swapi.dev/api/planets/${getHomeId(person)}`)
      .then((response) => {
        setPlanetName(response.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
    return planetName;
  };
  return (
    <Container>
      <Name>{character?.name.toLowerCase()}</Name>
      <Text>
        Born in {character?.birth_year}, on{' '}
        {
          <WLink to={`/worlds/${getHomeId(character)}`}>
            {worldName(character)}
          </WLink>
        }
        , {character?.name.toLowerCase()} appeared in {character?.films.length}{' '}
        Star Wars movie(s)!
        <Stats>
          Gender: {''}
          {character?.gender}
          <br />
          Height: {''}
          {character?.height}
          <br />
          Mass: {''}
          {character?.mass} Kilograms
        </Stats>
      </Text>
    </Container>
  );
};
export default SinglePerson;
const Container = styled.div`
  background-image: radial-gradient(#0000, black 99.9%);
  background-color: gray;
  margin: 0 25%;
  border-radius: 100px;
  height: 35em;
  padding: 1em;
`;
const Name = styled.h1`
  font-family: 'Star Jedi';
  font-size: 4em;
  -webkit-text-stroke-width: 0.01px;
  -webkit-text-stroke-color: yellow;
`;
const Stats = styled.p`
  font-size: 0.8em;
  font-family: 'Star Jedi';
  color: black;
`;
const Text = styled.p`
  font-size: 2em;
  font-family: 'Star Jedi';
  color: black;
`;
const WLink = styled(Link)`
  text-decoration: underline;
  color: black;
`;
