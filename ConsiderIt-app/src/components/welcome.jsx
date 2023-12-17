import { useState } from "react";


function Welcome ({userName}) {
    const [inputName, setInputName] = useState("")

    const recordName = (e) => {
        setInputName(e.target.value);
    }
    const submitName = (e) => {
        e.preventDefault();
        userName(inputName.toLowerCase())
    }
    return (
        <>
            <div class="container">
                <h1>Hello there..</h1>
                <form onSubmit={submitName}>
                    <input type="text" 
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