import { useEffect, useState } from "react";

function App(){
  const[count, setCount] = useState(0);
  useEffect(() => {
    console.log("const chnaged")
  },[])

  return(
    <div>
      <h1>useEffect Ptractice</h1>
      <h2>{count}</h2>

      <button onClick={() => setCount(count+1)}>
      Increase
      </button>
    </div>
  );
}
export default App;