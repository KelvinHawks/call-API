import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  
  const [starWars, setData] = useState({})
  const [countTimes, setCount] = useState(1)

  function increment(){
    setCount(prevCount=> prevCount + 1)
  }
  //   useEffect(()=>{
  //   console.log("effect function ran");
  // }, [countTimes])

  
console.log("component rendered");
 
  useEffect(function(){
     fetch(`https://swapi.dev/api/people/${countTimes}`)
    .then(res=>res.json())
    .then(data=> setData(data))
  },[countTimes])

  return (
    <div className="App">
      <h2>The count is {countTimes}</h2>
    <button onClick={increment}>Get next character</button>
    <pre>{JSON.stringify(starWars, null, 2)}</pre>
    
    </div>
    
  );
}

export default App;
