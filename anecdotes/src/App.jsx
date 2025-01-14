import { useState } from 'react'

const Title = ({text}) => <h1>{text}</h1>

const Button = ({handleAction, text}) => <button onClick={handleAction}>{text}</button>

const Popular = ({arr,anecdotes}) =>{
  const copy = [...arr] 
  let maxIndex = 0;

    for (let i = 1; i < copy.length; i++) { 
        if (copy[i] > copy[maxIndex]) { 
            maxIndex = i; 
        } 
    } 
    return (
    <>
    <p>{anecdotes[maxIndex]}</p>
    <Votes votes={copy[maxIndex]}/>
    </>)
}

const Votes = (props) => <p>has {props.votes} votes</p>

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
   
  const [selected, setSelected] = useState([0])
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
   
  const handleRandom = () => {
    setSelected(Math.round(Math.random()*(anecdotes.length - 1)))
  }

  const handleVote = () => {
    const copy = [...points]
    copy[selected] = copy[selected] + 1
    setPoints(copy)
  }

  return (
    <>
      <Title text='Anecdote of the day'/>
      <p>{anecdotes[selected]}</p>
      <Votes votes={points[selected]}/>
      <Button handleAction={handleRandom} text='Next anecdote'/>
      <Button handleAction={handleVote} text='Vote'/>
      <Title text='Anecdote with most votes'/>
      <Popular arr={points} anecdotes={anecdotes} />
    </>
  )
}

export default App