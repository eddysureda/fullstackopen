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

  if (total > 0) {
    return (
      <p>average {score / total}</p>
    )
  }
    
}
  
  
 
const Positive = ({good, total}) => {

  if (total > 0) {
    return (
      <p>positive {(good / total) * 100 } %</p>
    )
  }
}




const StatisticLine = ({text,value}) => <div><p>{text} {value}</p> </div>


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

  if (total === 0)
  {

    return (
      <div>
        <Display text='give feedback' />
        <Button onClick={handleGood} text='good' />
        <Button onClick={handleNeutral} text='neutral' />
        <Button onClick={handleBad} text='bad' />
        <Display text='statistics' />
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
        <Display text='give feedback' />
        <Button onClick={handleGood} text='good' />
        <Button onClick={handleNeutral} text='neutral' />
        <Button onClick={handleBad} text='bad' />
        <Display text='statistics' />
        <StatisticLine text="good" value ={good} />
        <StatisticLine text="neutral" value ={neutral} />
        <StatisticLine text="bad" value ={bad} />
        <StatisticLine text="all" value ={total} />
        <StatisticLine text="average" value ={score/total} />
        <StatisticLine text="positive" value ={good/total} />
        
    </div>
  )

  
}

export default App
