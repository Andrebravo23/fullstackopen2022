import { useState } from 'react';

const StatisticLine = ({ text, value }) =>
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>;

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;

  if (!all) {
    return (
      <p>no feedback given</p>
    )
  }

  const average = (props.good - props.bad) / all;
  const positive = (props.good * 100) / all;

  const Round = (value) => Math.round(value * 100) / 100;

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good}/>
        <StatisticLine text="neutral" value={props.neutral}/>
        <StatisticLine text="bad" value={props.bad}/>
        <StatisticLine text="all" value={all}/>
        <StatisticLine text="average" value={Round(average)}/>
        <StatisticLine text="positive" value={Round(positive).toString()+' %'}/>
      </tbody>
    </table>
  );
}

const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button>;

const App = () => {
  const [ good, setGood ] = useState(0);
  const [ neutral, setNeutral ] = useState(0);
  const [ bad, setBad ] = useState(0);

  return (
    <div>
      <h2>give feedback</h2>
      <Button text="good" handleClick={() => setGood(good + 1)}/>
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)}/>
      <Button text="bad" handleClick={() => setBad(bad + 1)}/>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  );
}

export default App;