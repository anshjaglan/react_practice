
import { useState } from "react";

function App() {

    // Input states
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("");
    const [city, setCity] = useState("");

    // Users state
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
    // edit state
   //  const[editIndex, setEditIndex] = useState(null);

    // Add User
    function addUser() {

        if (
            name.trim() === "" ||
            course.trim() === "" ||
            age === "" ||
            city.trim() === ""
        ) {
            return;
        }

        const newUser = {
            name: name,
            course: course,
            age: age,
            city: city
        };

        setUsers([...users, newUser]);

        // Clear inputs
        setName("");
        setCourse("");
        setAge("");
        setCity("");
    }

    // Delete User
    function deleteUser(indexToDelete) {
        setUsers(
            users.filter((_, index) => index !== indexToDelete)
        );
    }
    

    return (
        <div>

            <h1>Users</h1>

            {/* Display Users */}

            {users.map((user, index) => (
                <User
                    key={index}
                    name={user.name}
                    course={user.course}
                    age={user.age}
                    city={user.city}
                    onDelete={() => deleteUser(index)}
                />
            ))}


            <hr />

            <h2>Add New User</h2>

            {/* Name */}
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <br /><br />

            {/* Course */}
            <input
                type="text"
                placeholder="Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
            />

            <br /><br />

            {/* Age */}
            <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />

            <br /><br />

            {/* City */}
            <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />

            <br /><br />

            <button onClick={addUser}>
                Add User
            </button>

        </div>
    );
}


function User({ name, course, age, city, onDelete }) {

    const [showDetails, setShowDetails] = useState(false);

    return (
        <div>

            <h2>{name}</h2>

            <p>Course: {course}</p>

            <button
                onClick={() => setShowDetails(!showDetails)}
            >
                {showDetails ? "Hide Details" : "Show Details"}
            </button>

            <button onClick={onDelete}>
                Delete
            </button>
            <button>
                Edit User
            </button>

            {showDetails && (
                <div>
                    <p>Age: {age}</p>
                    <p>City: {city}</p>
                </div>
            )}

            <hr />

        </div>
    );
}


export default App;