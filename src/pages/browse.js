import React from 'react';
import { useContent } from '../hooks';

const Browse = () => {
  // series and films
  const { films } = useContent('films');
  const { series } = useContent('series');
  console.log(series);
  console.log(films);
  // slides
  // pass it to the browse container
  return <p>Hello from the Browse!</p>;
};

export default Browse;
