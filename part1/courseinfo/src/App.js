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
      <Part part={content.part1.name} exercise={content.part1.exercises} />
      <Part part={content.part2.name} exercise={content.part2.exercises} />
      <Part part={content.part3.name} exercise={content.part3.exercises} />
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
    <p> Number of exercises {props.exercises_total}</p>
  )
}

const App = () => {
  const course ="Half Stack Application Development"
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10
  }
  const part2 ={
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exercises_total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App