import { useEffect, useState } from "react";

function App(){
  // const[count, setCount] = useState(0);
  const[user, setUser] = useState([]);
  const[loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("const chnaged")
  },[])
  useEffect(() => {fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    return response.json()})
    .then(data => {
     
      // console.log(data);
      setUser(data);
      setLoading(false)
    })
  },[])

  return(
    <div>

      <h1>User</h1>
      {loading ? (<h2>Loading...</h2>) : (user.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <h3>{item.username}</h3>
          <p>{item.address.city}</p>
      {/* <button onClick={() => setUser(user)}> user details</button> */}
        </div>
      ))) }

      
    </div>
  );
}
export default App;