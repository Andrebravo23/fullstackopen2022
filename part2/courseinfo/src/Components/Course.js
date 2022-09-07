import React from 'react';

const Part = ( { part } ) => {
  return (
    <p>{ part.name } { part.exercises }</p>
  )
};

const Stats = ( { parts } ) => {
  let sum = parts.reduce((p, c) => p + c.exercises, 0);
  return (
    <p><b>total of { sum } exercises</b></p>
  )
}

const Content = ( { parts } ) => {
  return (
    <>
      { parts.map((part) =>
        <Part key={ part.id } part={ part } /> 
      ) }
    </>
  )
}

const Header = ( { name } ) => {
  return (
    <h2>{ name }</h2>
  )
}

const Course = ( { course } ) => {
  return (
    <>
      <Header name={ course.name } />
      <Content parts={ course.parts }/>
      <Stats parts={ course.parts }/>
    </>
  )
}

export default Course;