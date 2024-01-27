import { useState } from 'react'


const Button = ({onClick,text}) => <button onClick={onClick}>{text}</button>

const Anecdote = ({index,text,votes}) => {
  return (
    <div>
      <p>{text}</p>
      <p>has {votes} votes</p>
    </div>
  )
}

const Display = ({text}) => <h1>{text}</h1>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  
  let array = new Array(anecdotes.length).fill(0)
  console.log(array)
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(array)
  const [votest,setVotest] = useState(0)

  
  console.log(votes)

 
  

  const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    
  }

  const voteAnecdote = () =>
  {
    const copy=[...votes]
    copy[selected] += 1
    if (copy[selected] > copy[votest])
      setVotest(selected)
    setVotes(copy)
  }



  const handleAnecdote = () =>
  {
    //const updatedSelected = selected + 1
    setSelected(randomNumberInRange(0, anecdotes.length-1))
  }

  

  return (
    <div>
      <Display text='Anecdote of the day' />
      <Anecdote index={selected} text={anecdotes[selected]} votes={votes[selected]} />
      <Button onClick={voteAnecdote} text='vote anecdote' />
      <Button onClick={handleAnecdote} text='next anecdote' />
      <Display text='Anecdote with most votes' />
      <Anecdote index={votest} text={anecdotes[votest]} votes={votes[votest]} />
    </div>
  )
}

export default App