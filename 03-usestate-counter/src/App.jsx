import { useState } from "react";

function App(){
  
  const[count, setCount] = useState(0);
  function increases(){
    
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  
    
  }
  function decrease(){
    if(count > 0){
    setCount(count - 1 );
  }
}
  function reset(){
    setCount(0)
  }
  return(
    <div>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={increases} disabled={count >= 10}> + </button>
      <button onClick={decrease}> - </button>
      <button onClick={reset}> reset </button>
    </div>
  )
}
export default App;