import React from 'react';
import ComponentB from './ComponentB.jsx';

const ComponentA = () => {
  return (
    <div>
      <h1>Component A</h1>
      <ComponentB />
    </div>
  );
};

export default ComponentA;
