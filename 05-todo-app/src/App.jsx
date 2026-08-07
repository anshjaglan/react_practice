import { useState } from "react";

function App(){
  const[task, setTask] = useState("");
  const[tasks, setTasks] = useState([]);
  const[editIndex, setEditIndex] = useState(null);

  function addTask(){
    if(task.trim() === "") return;
    if(editIndex != null) {
      const updateTasks = [...tasks];
      updateTasks[editIndex] = task;
      setTasks(updateTasks);
      setEditIndex(null);
    } else {
    setTasks([...tasks, task]);
    }
    setTask("");
  }

  function deleteTask(indexToDelete){
    const updateTasks = tasks.filter((item, index) => 
      index !== indexToDelete
    );
    setTasks(updateTasks);
  }

  function editTask(index){
    setTask(tasks[index]);
    setEditIndex(index);
  }

  

  return(
    <div>
      <h1>To - Do App</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask( e.target.value)}
      />
      <button onClick={addTask}> 
            {editIndex !== null? "update" :"add"}
         </button>
      
      {
        tasks.map((item, index) => (
          <div key={index}>
            <h1>{item}</h1>
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button onClick={() => editTask(index)}> Edit </button>

          </div>
        ))
      }
    </div>
    
  )
}
export default App;