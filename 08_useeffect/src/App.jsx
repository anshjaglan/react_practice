import { useEffect, useState } from "react";

function App(){
  const[count, setCount] = useState(0);
  const[user, setUser] = useState([]);
  useEffect(() => {
    console.log("const chnaged")
  },[])
  useEffect(() => {fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    return response.json()})
    .then(data => {
     
      // console.log(data);
      setUser(data);
    })
  },[])

  return(
    <div>
      {/* <h1>useEffect Ptractice</h1>
      <h2>{count}</h2>

      <button onClick={() => setCount(count+1)}>
      Increase
      </button> */}
      <h1>User</h1>
      {user.map((item) => (
        <div>
          <h2>{item.name}</h2>
          <h3>{item.username}</h3>
          <p>{item.address.city}</p>
      {/* <button onClick={() => setUser(user)}> user details</button> */}
        </div>
      ))}
      
    </div>
  );
}
export default App;