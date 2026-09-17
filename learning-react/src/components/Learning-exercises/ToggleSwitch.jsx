import { useState } from "react";
import "./toggle.css";

const ToggleSwitch = () => {
    const [status, setStatus] = useState("On");
    return(
        <>
            <button onClick={() => setStatus(status === "On" ? "Off" : "On")} style={status === "On" ? {backgroundColor: "green"} : {backgroundColor: "gray"}}>{status}</button>
        </>
    )
}

export default ToggleSwitch;