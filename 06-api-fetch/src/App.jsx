function App(){
  return (
    <div>
      <h1>My App</h1>

      <User name="Ansh" course="B.Tech CSE" />
      <User name="Avi" course="Class 10" />
     
    </div>
  );



}
function User({name, course}){
  return(
    <div>
      <h2>{name}</h2>
      <h3>{course}</h3>
      
    </div>
  )
};



export default App;