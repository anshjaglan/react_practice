// function App(){
//   return (
//     <div>
//       <h1>My App</h1>

//       <User name="Ansh" course="B.Tech CSE" age={21} city="Roorkee" />
//       <User name="Avi" course="Class 10" age={16} city="Shamli"/>
     
//     </div>
//   );



// }
// function User({name, course, age, city}){
//   return(
//     <div>
//       <h2>{name}</h2>
//       <h3>{course}</h3>
//       <p>{age}</p>
//       <p>{city}</p>
      
//     </div>
//   )
// };



// export default App;

import { useState } from "react";
const user =[
  {
    name : "Ansh",
    course : "B.Tech CSE",
    age : 21,
    city : "shamli"

  },
];

function App(){
  return(
    <div>
      <h1>Users</h1>
      {user.map((user, index) => 
      <User 
          key={index}
          name={user.name}
          course={user.course}
          city={user.city}
          age={user.age}
          
      />
      )}
    </div>
  );
}

function User({name, course, age, city}) {

  const[showDetails, setShowDetails] = useState{false};
  return (
    <div>
      <h2>{name}</h2>
      <p>Course : {course}</p>
      <p>Age : {age}</p>
      <p>City : {city}</p>
      <hr />
    </div>
  );
}

export default App;