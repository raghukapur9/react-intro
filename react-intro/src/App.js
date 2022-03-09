import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import {useState} from 'react'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
        {   
            id: 1,
            text: "Football Match",
            day: "March 10th 2:30pm",
            reminder: true,
        },
        {   
            id: 2,
            text: "Meeting",
            day: "March 10th 4:30pm",
            reminder: true,
        },
        {   
            id: 3,
            text: "Gym",
            day: "March 10th 8:30pm",
            reminder: true,
        }    
    ]
  )

  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000) + 1;
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    console.log("delete", id);
    setTasks(tasks.filter((task) => task.id!==id))
  }

  const toggleReminder = (id) => {
    console.log("toggle", id);
    setTasks(tasks.map((task) => task.id===id?{...task, reminder: !task.reminder} : task))
  }
  return (
    <div className="Container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask  onAdd={addTask}/>}
      {tasks.length > 0? (
        <Tasks tasks={tasks} onDelete={deleteTask} onDoubleClick={toggleReminder}/>)
        : ("No tasks to show") }
    </div>
  );
}

export default App;
