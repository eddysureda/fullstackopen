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
    <p>{props.subject} with {props.exercise} exercises</p>
    
  )
}


const Content = (props) => {
  return (
    <div>
       <Part subject={props.part[0].name} exercise={props.part[0].exercises} />   
       <Part subject={props.part[1].name} exercise={props.part[1].exercises} />
       <Part subject={props.part[2].name} exercise={props.part[2].exercises} />
    </div>
    
  )
}


const Total = (props) => {
  return (
    <div>
     <p>Number of exercises {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises}</p>
    </div>
    
  )
}


const App = () => {

  const course = {

    name:'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
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
  }

  return (
    <div>
      <Header course={course.name} />
      <Content part={course.parts} />
      <Total part={course.parts} />
    </div>
  )

  
}

export default App