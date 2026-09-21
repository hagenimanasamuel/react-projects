import { useEffect, useState } from "react";
import "./timer.css";

export default function Timer() {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        if(!running || time <= 0) return
        const id = setTimeout(() => {
            setTime(prev => prev - 1);
        }, 1000);
        return () => clearTimeout(id);
    }, [running, time]);

    const start = () => {
        if(time > 0) setRunning(true);
    }

    const stop = () => setRunning(false);

    const reset = () => {
        setRunning(false);
        setTime(0);
    }
    return (
        <>
            <h1>Timer</h1>
            <input type="number" placeholder="seconds to count down" value={time} onChange={(e) => setTime(Number(e.target.value) || 0)} disabled={running}/>
            <button onClick={start} disabled={running || time <= 0}>Start Timer</button>
            <button onClick={stop} disabled={!running}>Pause</button>
            <button onClick={reset}>Reset</button>
            <h1>{time}</h1>
        </>
    )
}