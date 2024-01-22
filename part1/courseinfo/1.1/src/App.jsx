const Header = () => {
  const course = 'Half Stack application development'
  
  return (
    <div>
      <h1>{course}</h1>
    </div>

  )

}

const Content = (props) => {
  return (
    <div>
     <p>Subject: {props.subject} with {props.exercises} exercises</p>
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
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
     <Header />
     <Content subject='Fundamentals of React' exercises={exercises1} />
     <Content subject='Using props to pass data' exercises={exercises2} />
     <Content subject='State of a component' exercises={exercises3} />
     <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      
    </div>
  )
}

export default App