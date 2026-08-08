import { useState } from "react";

function App(){
  const[username, setUsername] = useState("");
  const[user, setUser] = useState(null);

    async function searchUser() {
      const response = await fetch(
       `https://api.github.com/users/${username}` 
      );
      const data = await response.json();
      setUser(data);
  }
  
  return(
    <div>
    <h1>Github User</h1>
    <input
    type="text"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    />
    <button onClick={searchUser}>
    Search
    </button>
    </div>
  );


}
export default App;