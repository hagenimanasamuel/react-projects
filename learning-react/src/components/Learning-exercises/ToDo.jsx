import { useEffect, useState } from "react";
import "./todo.css";

export default function ToDo() {
    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState([]);
    const [listType, setListType] = useState('ul');

    function addTask() {
        setTasks([...tasks, input]);
        setInput('');
    }

    const Listing = listType;

    return (
        <>
            <h1>To-Do App</h1>
            <input type="text" placeholder="input task" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={addTask}>Add Task</button>
            <h1>Your Task</h1>
            <Listing>
                {tasks.map(task => (
                    <li>{task}</li>
                ))}
            </Listing>
            <button onClick={() => setListType(listType === "ul" ? "ol" : "ul")}>Change List type</button>
        </>
    )
}