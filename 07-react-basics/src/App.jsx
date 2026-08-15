import { useState } from "react";

function App() {
 
    // ---------------- INPUT STATES ----------------
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("");
    const [city, setCity] = useState("");

    // ---------------- EDIT STATE ----------------
    // null = currently adding a new user
    // number = currently editing that user's index
    const [editIndex, setEditIndex] = useState(null);

    // ---------------- USERS STATE ----------------
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


    // ---------------- ADD USER ----------------
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

        clearInputs();
    }


    // ---------------- DELETE USER ----------------
    function deleteUser(indexToDelete) {

        setUsers(
            users.filter((_, index) => index !== indexToDelete)
        );
    }


    // ---------------- EDIT USER ----------------
    function editUser(index) {

        const user = users[index];

        // Put selected user's data into inputs
        setName(user.name);
        setCourse(user.course);
        setAge(user.age);
        setCity(user.city);

        // Remember which user we are editing
        setEditIndex(index);
    }


    // ---------------- UPDATE USER ----------------
    function updateUser() {

        if (
            name.trim() === "" ||
            course.trim() === "" ||
            age === "" ||
            city.trim() === ""
        ) {
            return;
        }

        const updatedUser = {
            name: name,
            course: course,
            age: age,
            city: city
        };

        const updatedUsers = [...users];

        updatedUsers[editIndex] = updatedUser;

        setUsers(updatedUsers);

        // Go back to Add mode
        setEditIndex(null);

        clearInputs();
    }


    // ---------------- CLEAR INPUTS ----------------
    function clearInputs() {
        setName("");
        setCourse("");
        setAge("");
        setCity("");
    }


    return (
        <div>

            <h1>Users</h1>

            {/* ---------------- DISPLAY USERS ---------------- */}

            {users.map((user, index) => (

                <User
                    key={index}

                    name={user.name}
                    course={user.course}
                    age={user.age}
                    city={user.city}

                    onDelete={() => deleteUser(index)}

                    onEdit={() => editUser(index)}
                />

            ))}


            <hr />


            {/* ---------------- FORM ---------------- */}

            <h2>
                {editIndex === null
                    ? "Add New User"
                    : "Edit User"
                }
            </h2>


            {/* NAME */}

            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <br />
            <br />


            {/* COURSE */}

            <input
                type="text"
                placeholder="Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
            />

            <br />
            <br />


            {/* AGE */}

            <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />

            <br />
            <br />


            {/* CITY */}

            <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />

            <br />
            <br />


            {/* ADD / UPDATE BUTTON */}

            <button
                onClick={
                    editIndex === null
                        ? addUser
                        : updateUser
                }
            >
                {editIndex === null
                    ? "Add User"
                    : "Update User"
                }
            </button>


            {/* CANCEL EDIT */}

            {editIndex !== null && (
                <button
                    onClick={() => {
                        setEditIndex(null);
                        clearInputs();
                    }}
                >
                    Cancel
                </button>
            )}

        </div>
    );
}


// ==================================================
// USER COMPONENT
// ==================================================

function User({
    name,
    course,
    age,
    city,
    onDelete,
    onEdit
}) {

    const [showDetails, setShowDetails] = useState(false);

    return (
        <div>

            <h2>{name}</h2>

            <p>
                Course: {course}
            </p>


            {/* SHOW / HIDE */}

            <button
                onClick={() =>
                    setShowDetails(!showDetails)
                }
            >
                {showDetails
                    ? "Hide Details"
                    : "Show Details"
                }
            </button>


            {/* EDIT */}

            <button onClick={onEdit}>
                Edit User
            </button>


            {/* DELETE */}

            <button onClick={onDelete}>
                Delete
            </button>


            {/* DETAILS */}

            {showDetails && (
                <div>

                    <p>
                        Age: {age}
                    </p>

                    <p>
                        City: {city}
                    </p>

                </div>
            )}


            <hr />

        </div>
    );
}


export default App;