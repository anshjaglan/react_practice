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

function App() {
  const[name, setName] = useState("");
  const[age, setAge] = useState("");
  const[course, setCourse] = useState("");
  const[city, setCity] = useState("");
  const [users, setUsers] = useState([
     
      {
            name: "Ansh",
            course: "B.Tech CSE",
            age: 21,
            city: "Shamli"
        },
        {
            name: "Avi",
            course: "Class 10",
            age: 16,
            city: "Shamli"
        },
        {
            name: "Rahul",
            course: "BCA",
            age: 20,
            city: "Delhi"
        }
    ]);

    return (
        <div>
            <h1>Users</h1>

            {users.map((user, index) => (
                <User
                    key={index}
                    name={user.name}
                    course={user.course}
                    city={user.city}
                    age={user.age}
                    onDelete={() => {
                        setUsers(
                            users.filter((_, i) => i !== index)
                        );
                    }}
                />

            ))}
                <input 
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <input 
                type="text"
                placeholder="Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                />
                <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                />
                <input 
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                />
        </div>
    );
}

function User({name, course, age, city, onDelete }) {

  const[showDetails, setShowDetails] = useState(false);
  function addUser(){
  const newUser = {
    name: name,
    course: course,
    age: age,
    city: city
  };
  setUsers([...users, newUser]);
}
  return (
    <div>
      <h2>{name}</h2>
      <p>Course : {course}</p>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "hide details" : "Show details"}
      </button>
      <button onClick={onDelete}>
        Delete
      </button>
            <button onClick={addUser}>
        Add User
      </button>

      { showDetails && (
        <div>
         <p>Age : {age}</p>
         <p>City : {city}</p>
         

        </div>
      )
        
      }
      <hr />
    </div>
  );
}



export default App;