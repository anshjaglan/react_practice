import { useState } from "react";

function App(){
  const[username, setUsername] = useState("");
  const[user, setUser] = useState(null);
  const[loading, setLoading] = useState(false);
  const[error, setError] = useState("");

    async function searchUser() {
      setLoading(true);
      setError("");
      setUser(null);
      try{
      const response = await fetch(
       `https://api.github.com/users/${username}` 
      );

      if(!response.ok){
        throw new Error("User not found");
      }
      const data = await response.json();
      setUser(data);
  } catch (error){
    setError(error.message);
  }
  setLoading(false);
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
    {loading && <p>{loading}</p>}
    {error && <p>{error}</p>}
    {
      user && (

        // <pre>
        //   {JSON.stringify(user, null, 2)}
        // </pre>
        <div>
          <h2>{user.name}</h2>
          <p>Username : {user.login}</p>
          <p>Followers : {user.followers}</p>
          <p>Repositories : {user.public_repos}</p>
        </div>
      )
    }
    </div>
  );


}
export default App;