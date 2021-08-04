import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (content) => {
  return (
    <div>
      <Part part={content.parts[0].name} exercise={content.parts[0].exercises} />
      <Part part={content.parts[1].name} exercise={content.parts[1].exercises} />
      <Part part={content.parts[2].name} exercise={content.parts[2].exercises} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p> {props.part} {props.exercise}</p>
    </div>
    ) 
}

const Total = (props) => {
  return (
    <p> Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}

const App = () => {
  const course ="Half Stack Application Development"
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App