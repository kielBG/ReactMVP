import { useState } from "react";



function DailyJournal ({dailyEntry}) {
    const [questionOne, setQuestionOne] = useState("");
    const [questionTwo, setQuestionTwo] = useState("");
    const [questionThree, setQuestionThree] = useState("");
    const [friendlyComment, setFriendlyComment] = useState("");
    const [moodRating, setMoodRating] = useState("");

    // const handleChange = (e, func) => (
    //     func(e.target.value)
    // )

    const handleClick = (e) => (
        setMoodRating(e.target.id)
    )

    const handleSubmit = (e) => {
        e.preventDefault()

        const entryObj = {
            questionOne,
            questionTwo,
            questionThree,
            moodRating,
            friendlyComment
        }
        dailyEntry(entryObj);
    }
    
    
    return (
        <>
        <div className="container">
            <h1>Daily Journal</h1>
            <form onSubmit={handleSubmit}>
                <p>How is your overall mood and mindset today?</p>
                <input type="text"
                id="question1"
                placeholder="I like smiling"
                value={questionOne}
                onChange={e => setQuestionOne(e.target.value)}>
                </input>
                <p>Was there any specific experiences today that were particularly stressful or challanging?<br />
                If so, what ways did you cope or respond to the situation?<br />
                If not, what was a positive emotional highlight today?
                </p>
                <input type="text"
                id="question2"
                placeholder="Chocolate is delicious"
                value={questionTwo}
                onChange={e => setQuestionTwo(e.target.value)}>
                </input>
                <p>Picture a friend you care about experiencing what you are going through. <br />
                What constructive advice or insights would you give them to ease their journey?</p>
                <input type="text"
                id="question3"
                placeholder="Hello friend!"
                value={questionThree}
                onChange={e => setQuestionThree(e.target.value)}>
                </input>
                <p>Mood Rating</p>
                <button id="1" onClick={handleClick}>1</button>
                <button id="2" onClick={handleClick}>2</button>
                <button id="3" onClick={handleClick}>3</button>
                <button id="4" onClick={handleClick}>4</button>
                <button id="5" onClick={handleClick}>5</button>
                <p>Say something nice about yourself. You deserve it!</p>
                <input type="text"
                id="addComments"
                placeholder="Be kind"
                value={friendlyComment}
                onChange={e => setFriendlyComment(e.target.value)}>
                </input>

            </form>
        </div>
        
        </>
    )

}

export default DailyJournal;