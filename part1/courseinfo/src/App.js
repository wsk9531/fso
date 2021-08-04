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
      <Part part={content.part1} exercise={content.exercises1} />
      <Part part={content.part2} exercise={content.exercises2} />
      <Part part={content.part3} exercise={content.exercises3} />
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
  const part1 ="Fundamentals of React"
  const exercises1 = 10
  const part2 ='Using props to pass data'
  const exercises2 = 7
  const part3 ='State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content exercises1={exercises1} exercises2 = {exercises2} exercises3 = {exercises3} part1 ={part1} part2 ={part2} part3={part3} />
      <Total exercises_total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App