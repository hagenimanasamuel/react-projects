import { useState } from "react";
import "./calculator.css";

export default function Calculator() {
    const [input, setInput] = useState("");
    const [answer, setAnswer] = useState();
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const navs = ["+", "-", "*", "/", "%"];

    const calculate = (expr) => {
        if (!/^[\d\s+\-*/%]+$/.test(expr)) return "Error";
        try {
            return Function(`"use strict"; return (${expr})`)();
        } catch {
            return "Error";
        }
    };

    return (
        <div className="container">
            <div className="header-sect">
                <h1>Calculator</h1>
                <h1 className="input">{input || "0"}</h1>
                {answer !== undefined && <h2>= {answer}</h2>}
            </div>

            <div className="body-sect">
                <div className="btns">
                    <div className="nums">
                        {numbers.map(number => (
                            <button key={number} onClick={() => setInput(input + number)}>
                                {number}
                            </button>
                        ))}
                    </div>
                    <div className="navs">
                        {navs.map(nav => (
                            <button key={nav} onClick={() => setInput(input + " " + nav + " ")}>
                                {nav}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="submit">
                    <button onClick={() => setAnswer(calculate(input))}>=</button>
                    <button onClick={() => { setInput(""); setAnswer(undefined); }}>Clear</button>
                </div>
            </div>
        </div>
    );
}