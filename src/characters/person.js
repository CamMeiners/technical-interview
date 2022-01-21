import React from 'react';

import { getPerson } from 'swapi-wrapper';
const Person = ({ person }) => {
  return (
    <div>
      <h3>{person.name}</h3>
    </div>
  );
};
getPerson();
export default Person;
