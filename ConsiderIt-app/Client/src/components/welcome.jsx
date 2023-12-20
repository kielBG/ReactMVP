import { useState } from "react";


function Welcome ({userName}) {
    const [inputName, setInputName] = useState("")

    const recordName = (e) => {
        setInputName(e.target.value);
    }
    const submitName = (e) => {
        e.preventDefault();
        userName(inputName)
    }
    return (
        <>
            <div className="container">
                <h1>Let's Journal</h1>
                <p className="opening">Today's a good day to reflect</p>
                <form onSubmit={submitName}>
                    <input className="nameInput"
                    type="text" 
                    placeholder="Put your name here"
                    value={inputName}
                    onChange = {recordName}
                    ></input>
                </form>
                
            </div>

        </> 
    )
}

export default Welcome;