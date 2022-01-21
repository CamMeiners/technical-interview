import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
const SinglePerson = () => {
  const [world, setWorld] = useState();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/planets/${id}`)
      .then((data) => {
        setWorld(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const getResidentId = (index) => {
    let x = '';

    if (world?.residents) {
      x = world.residents[index];
    }
    return x.match(/\d+/g);
  };

  const [charName, setCharName] = useState([]);
  const [hideButton, setHideButton] = useState(false);
  const getPeople = () => {
    let limit =
      world?.residents?.length && world.residents.length < 3
        ? world.residents.length
        : 3;

    for (let i = 0; i < limit; i++) {
      axios
        .get(`https://swapi.dev/api/people/${getResidentId(i)}`)
        .then((data) => {
          setCharName((prevState) => [...prevState, data.data]);
          console.log(`index ${i}`, data.data);
          console.log('charName', charName);
        });
    }
    setHideButton(true);
  };
  const peopleCheck = world?.residents?.length !== 0;
  return (
    <Container>
      <Name>{world?.name.toLowerCase()}</Name>
      <Stats>
        <Text>
          {world?.name.toLowerCase()}'s climate is{' '}
          {world?.climate.toLowerCase()}. it has a diameter of {world?.diameter}{' '}
          and it's gravity is {world?.gravity}.{' '}
        </Text>
        <Text>Population: {world?.population}</Text>

        <Text>
          {peopleCheck
            ? `Most Notable Characters from ${world?.name.toLowerCase()}:`
            : `There Are No Notable Characters from ${world?.name.toLowerCase()}`}
        </Text>
      </Stats>
      {!hideButton && peopleCheck && (
        <PeopleButton onClick={() => getPeople()}>click here!</PeopleButton>
      )}
      <Text>
        {charName.map((char) => (
          <PLink to={`/people/${char.url.match(/\d+/g)}`}>
            {char?.name.toLowerCase()}
            <br />
          </PLink>
        ))}
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
const Stats = styled.div`
  font-size: 0.8em;
  font-family: 'Star Jedi';
  color: black;
`;
const Text = styled.p`
  font-size: 2em;
  font-family: 'Star Jedi';
  color: black;
`;
const PLink = styled(Link)`
  font-size: 0.7em;
  font-family: 'Star Jedi';
  color: black;
`;
const PeopleButton = styled.button`
  width: 200px;
  height: 40px;
  background-color: dark-gray;
  font-size: 18px;
  font-family: 'Star Jedi';
  text-decoration: none;
  background-color: darkgray;
  border: 2px solid #333;
  letter-spacing: 2px;
  text-align: center;
  transition: all 0.35s;
  &:after {
    content: '';
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #d3d3d3;
    transition: all 0.35s;
  }
  &:hover {
    background-color: #d3d3d3;
  }
`;
