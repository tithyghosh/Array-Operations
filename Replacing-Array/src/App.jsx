import { useState } from "react";

const App = () => {
  let initialCounters = [0, 0, 0];
  const [counters, setCounters] = useState(initialCounters);
  const handleIncrementClick = (index) =>{
    const nextCounters = counters.map((c, i) => {
      if(i === index){
        return (c + 1);
      }
      else{
        return c;
      }
    });
    setCounters(nextCounters);
  }
  return (
    <>
      <ul>
        {counters.map((counter, i) =>(
          <li key={i}>
            {counter}
            <button onClick={() => { handleIncrementClick(i)}}>+1</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
