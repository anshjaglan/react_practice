// React forms practice here i used multiple states, onSubmit , onChange, conditional rendering and passwoed masking
import { useState } from "react"

function App(){
  // create mutiple states
  const[name, setName] = useState("");
  const[age, setAge] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  function handleSubmit(){
  // e.preventDefault(); // prevent refresh
  if(name.trim() === ""){
    alert("Please enter valid name");
    return;
  }
  
    if(age.trim() === ""){
    alert("Please enter age");
    return;
  }
    if(email.trim() === ""){
    alert("Please enter valid email");
    return;
  }
    if(password.trim() === ""){
    alert("Please enter valid password");
    return;
  }
  alert(`Welcome  ${name}`)
}
  return(
    <form onSubmit={handleSubmit}>
      <h1>React Forms</h1>
      {/* take input*/}
       { /* controlled component */}
      <input 
      placeholder="Enter Name"
      type="text"
    
      value={name}
      onChange={(e) => setName(e.target.value)} 
      />
     
      <input 
      placeholder="Enter Age"
      type="number"
      value={age}
      onChange={(e) => setAge(e.target.value)} 
      />
      <input
      placeholder="Enter Email"
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />
      <input
      placeholder="Enter Password"
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
     
     {/* Conditional rendring*/}
     <h2>Hello : {name  || "Guest"}  </h2>
     <h2>Age : {age || "Guessing"}  </h2>
     <h3>Email : {email || "example@gmail.com"}</h3>

   { /* password masking*/}
    <h3>Password : {"*".repeat(password.length)}</h3>
         <button type="submit">
      Login
     </button>
    </form>
  )
}


export default App;