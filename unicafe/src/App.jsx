import { useState } from 'react'

const Title = ({text}) => <h1>{text}</h1>

const Button = ({handleClick, state}) => <button onClick={handleClick}>{state}</button>

const StatisticLine = ({state, value, unit}) =>{
  return(<tr>
<td>{state}</td>
<td>{value} {unit}</td>
</tr>)
}

const Statistics = ({good, neutral, bad, counter}) =>{
  const all = good + neutral + bad
  const average = counter/all
  const positive_feed = good/all

  if(all == 0){return(<p>No feedback given</p>)}
  else{
  return(<table>
    <thead>
      <tr>
      <th>State</th>
      <th>Value</th>
      </tr>
    </thead>
    <tbody>
  <StatisticLine state="Good" value={good}/>
  <StatisticLine state="Neutral" value={neutral}/>
  <StatisticLine state="Bad" value={bad}/>
  <StatisticLine state="All" value={all}/>
  <StatisticLine state="Average" value={average} unit="%"/>
  <StatisticLine state="Positive Feed" value={positive_feed} unit="%"/>
  </tbody>
  </table>)}
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [counter, setCounter] = useState(0)

  const setToGood = () => {
    setGood(good + 1)
    setCounter(counter + 1)
  }
  
  const setToNeutral = () => setNeutral(neutral + 1)
  
  const setToBad = () => {
    setBad(bad + 1)
    setCounter(counter - 1)
  }

  return (
    <>
    <Title text='give feedback' />
    <Button handleClick={setToGood} state='good'/>
    <Button handleClick={setToNeutral} state='neutral'/>
    <Button handleClick={setToBad} state='bad'/>
    <Title text='Statistics'/>
    <Statistics good={good} neutral={neutral} bad={bad} counter={counter} />
    </>
  )
}

export default App


