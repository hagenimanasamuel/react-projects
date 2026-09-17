import { react, useState } from 'react';

function Forms() {
    const [inputValue, setInputValue] = useState("");

    return (
        <div>
            <form>
                <label>Enter text</label>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </form>

            <br />

            <div>
                Entered Value: {inputValue}
            </div>
        </div>
    );

}

export default Forms;