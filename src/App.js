import { useState } from "react";
import { Buttons } from "./Buttons";
import { Pool } from "./Pool";

function App() {

  const [count, setCount] = useState(0);


  const addWater = ()=>{
    let startTime = Date.now();
    const interval = setInterval(()=>{
      setCount(prov => prov + 1)
      
      if(Date.now() - startTime > 8000) clearInterval(interval);

    }, 2000)
  }

  const removeWater = ()=>{
    let startTime = Date.now();
    const interval = setInterval(()=>{
      setCount(prov => prov - 1)

      if(Date.now() - startTime > 8000) clearInterval(interval)

    }, 2000)
  }

  return (
    <div className="App">
      <h1 className="pool">POOL</h1>
     <Buttons addWater = {addWater} removeWater = {removeWater}/>
     <Pool count =  {count}/>
    </div>
  );
}

export default App;
