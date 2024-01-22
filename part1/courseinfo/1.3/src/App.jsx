const Header = () => {
  const course = 'Half Stack application development'
  
  return (
    <div>
      <h1>{course}</h1>
    </div>

  )

}

/*
const Part = (props) => {
  return (
    <p>Subject: {props.subject} with {props.exercise} exercises</p>
    
  )
}
*/

const Content = (props) => {
  return (
    <div>
       <p>{props.part.name} with {props.part.exercises} exercises</p>   
    </div>
    
  )
}


const Total = (props) => {
  return (
    <div>
     <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
    
  )
}


const App = () => {

  const course = 'Half Stack application development'

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
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
      <Content part={part1} />
      <Content part={part2} />
      <Content part={part3} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  )

  
}

export default App