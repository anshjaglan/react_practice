// function App(){
//   return (
//     <div>
//       <h1>ANSH JAGLAN</h1>
//       <h2>Coer University</h2>
//       <p>Final year CSE student</p>
//       <button onClick={() => alert("ANSH")}>Click me</button>
//     </div>
//   )
// }
// export default App;

// function App(){
//   function sayHello(){
//     alert("Button Clicked");
//   } 
//   return(
//     <div>
//       <h1>Button Check</h1>
//       <h2>Click for check button</h2>
//     <button onClick={sayHello}>Clicked</button>
//     <button onClick={() => {alert("Welcome to our page")}}>Welcome</button>
   
//     </div>
//   )
  

// }
// export default App;


// function App(){
//   function greet(name){
//     alert("Hello " + name)
//   }
//   return(
//     <div>
//       <button onClick={()  => greet("ansh")}>ANSH</button>
//       <button onClick={()  => greet("rahul")}>rahul</button>
//       <button onClick={()  => greet("amit")}>Amit</button>
//     </div>
//   )

// }
// export default App;


// ============using of props=================//////////
import Profile from "./Profile";

function App(){
  return(
    <div>
      <Profile name="Ansh"
       branch="CSE"
        age={22}/>
      <Profile name="chintu" 
      branch="CSE" 
      age={16}/>
      <Profile name="banti" 
      branch="CSE"
       age={16}/>
    </div>
  )
}
export default App;