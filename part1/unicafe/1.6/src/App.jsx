import { useState } from 'react'

const Button = (props) => { 

  console.log('props value is:', props)
  const { onClick, text } = props
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Display = ({text}) => <h1>{text}</h1>

const Stats = ({good,neutral,bad}) => {
  return(
    <div>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  
  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
  }

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }

  const handleBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
  }

  

  return (
    <div>
      <Display text='give feedback' />
      <Button onClick={handleGood} text='good' />
      <Button onClick={handleNeutral} text='neutral' />
      <Button onClick={handleBad} text='bad' />
      <Display text='statistics' />
      <Stats good={good} neutral={neutral} bad={bad} />

      
      
    </div>
  )
}

export default App
