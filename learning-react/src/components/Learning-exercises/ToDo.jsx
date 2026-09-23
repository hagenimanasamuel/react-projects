import { useState } from "react";
import "./todo.css";

export default function ToDo() {
    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState([]);
    const [listType, setListType] = useState('ul');

    function addTask() {
        setTasks([...tasks, {text: input, done: false}]);
        setInput('');
    }

    function toggleDone(index) {
        setTasks(tasks.map((task, i) => {
            return i === index ? {...task, done: !task.done} : task
        }))
    }

    function removeItem(index) {
        setTasks(tasks.filter((task, i) => {
            return i !== index;
        }))
    } 

    const Listing = listType;

    return (
        <>
            <h1>To-Do App</h1>
            <input type="text" placeholder="input task" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={addTask}>Add Task</button>
            <h1>Your Task</h1>
            <Listing>
                {tasks.map((task, index) => (
                    <div className="items" key={index}>
                        <li style={{textDecoration: task.done ? 'line-through' : 'none'}}>{task.text}</li>
                        <input type="checkbox" checked={task.done} onChange={() => toggleDone(index)}/>
                        <button onClick={() => removeItem(index)}>Delete</button>
                    </div>
                ))}
            </Listing>
            {tasks.length > 0 && <button onClick={() => setListType(listType === "ul" ? "ol" : "ul")}>Change List type</button>}
        </>
    )
}