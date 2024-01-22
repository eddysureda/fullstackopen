const Header = () => {
  const course = 'Half Stack application development'
  
  return (
    <div>
      <h1>{course}</h1>
    </div>

  )

}

const Part = (props) => {
  return (
    <p>Subject: {props.subject} with {props.exercise} exercises</p>
    
  )
}

const Content = (props) => {
  return (
    <div>
    <Part subject={props.courses[0].subject} exercise={props.courses[0].exercise} />
    <Part subject={props.courses[1].subject} exercise={props.courses[1].exercise} />
    <Part subject={props.courses[2].subject} exercise={props.courses[2].exercise} />

    
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

  const courses = [
    { subject: 'Fundamentals of React', exercise: 10 },
    { subject: 'Using props to pass data', exercise: 7 },
    { subject: 'State of a component', exercise: 14 }
  ]
  

  return (
    <div>
     <Header />
     <Content courses={courses} />
     <Total exercises1={courses[0].exercise} exercises2={courses[1].exercise} exercises3={courses[2].exercise} />
      
    </div>
  )
}

export default App