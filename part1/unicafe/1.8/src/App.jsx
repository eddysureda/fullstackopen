import { useState } from 'react'

const Button = (props) => { 

  const { onClick, text } = props
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Display = ({text}) => <h1>{text}</h1>

const Average = ({score, total}) => {

  if (total === 0) {
    return (
      <p>average 0.0</p>
    )
  }
  return (
    <p>average {score / total}</p>
  )
  
}

const Positive = ({good, total}) => {

  if (total === 0) {
    return (
      <p>positive 0.0 %</p>
    )
  }
  return (
    <p>positive {(good / total) * 100 } %</p>
  )
}


const Stats = ({good,neutral,bad,total}) => {
  return(
    <div>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <p>all {total}</p>
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [score, setScore] = useState(0)
  const [total, setTotal] = useState(0)
  
  
  const handleGood = () => {
    const updatedGood = good + 1
    const updatedScore = score + 1
    setGood(updatedGood)
    setScore(updatedScore)
    setTotal(updatedGood + neutral + bad)

  }

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(updatedNeutral + good + bad)
  }

  const handleBad = () => {
    const updatedBad = bad + 1
    const updatedScore = score - 1
    setBad(updatedBad)
    setScore(updatedScore)
    setTotal(updatedBad + good + neutral)
  }

  

  return (
    <div>
      <Display text='give feedback' />
      <Button onClick={handleGood} text='good' />
      <Button onClick={handleNeutral} text='neutral' />
      <Button onClick={handleBad} text='bad' />
      <Display text='statistics' />
      <Stats good={good} neutral={neutral} bad={bad} total={total}/>
      <Average score={score} total={total} />
      <Positive good={good} total={total} />

      
      
    </div>
  )
}

export default App
