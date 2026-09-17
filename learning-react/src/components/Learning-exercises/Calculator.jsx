import { useState } from "react";

export default function Calculator() {
    const [input, setInput] = useState("");
    const [answer, setAnswer] = useState();
    const numbers = [1,2,3,4,5,6,7,8,9,0];
    const navs = ["+", "-", "*", "/", "%"];
    return(
        <>
            <div className="container">
                <div className="header-sect">
                    <h1>Calculator</h1>
                    <h1>{input}</h1>
                    <h2>={answer}</h2>
                </div>
                <div className="body-sect">
                    <div className="btns">
                        <div className="nums">
                            {numbers.map(number => (
                                <button key={number} onClick={() => setInput(input + number)}>{number}</button>
                            ))}
                        </div>
                        <div className="navs">
                            {navs.map(nav => (
                                <button onClick={() => setInput(input + nav)}>{nav}</button>
                            ))}
                        </div>
                    </div>
                    <div className="submit">
                        <button onClick={() => setAnswer(eval(input))}>=</button>
                    </div>
                </div>
            </div>
        </>
    )
}