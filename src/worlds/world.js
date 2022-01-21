import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const World = () => {
  const [worldData, setWorldData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/planets`)
      .then((data) => {
        setWorldData(data.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const getId = (world) => {
    let x = world?.url || '';
    let matches = x.match(/\d+/g);
    return matches;
  };

  return (
    <Container>
      {worldData.map((world, index) => (
        <WorldLink to={`/worlds/${getId(world)}`}>
          {world.name.toLowerCase()}
          <br />
        </WorldLink>
      ))}
    </Container>
  );
};
export default World;
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
const WorldLink = styled(Link)`
  font-family: 'Star Jedi';

  padding: 0.4em;
  text-decoration: none;
  font-size: 1.2em;
  color: black;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: yellow;
`;
