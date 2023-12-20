import { useState } from "react";


function EditEntry(journalEntry, editJournalEntry, changeEditView) {

    const [firstQuestion, setFirstQuestion] = useState("");
    const [secondQuestion, setSecondQuestion] = useState("");
    const [thirdQuestion, setThirdQuestion] = useState("");
    const [addComments, setAddComments] = useState("");
    const [moodRating, setMoodRating] = useState("");

    const handleClick = (e) => (
        setMoodRating(e.target.id)
    )

    const handleSubmitClick = (e) => {

        const editObj = {
            name: journalEntry.journalEntry.name,
            firstquestion: firstQuestion,
            secondquestion: secondQuestion,
            thirdquestion: thirdQuestion,
            moodrating: moodRating,
            addcomments: addComments
        }

        journalEntry.editJournalEntry(e.target.id, editObj);

        journalEntry.changeEditView(false);
    }

    return (
    <>
        <h4>What needs editting?</h4>
        <p>{journalEntry.journalEntry.firstquestion}</p>
        <input className="dailyEntry"
        type="text" 
        placeholder={journalEntry.journalEntry.firstquestion} 
        value={firstQuestion} 
        onChange={e => setFirstQuestion(e.target.value)}></input>
        <p>{journalEntry.journalEntry.secondquestion}</p>
        <input className="dailyEntry"
        type="text" 
        placeholder={journalEntry.journalEntry.secondquestion} 
        value={secondQuestion} 
        onChange={e => setSecondQuestion(e.target.value)}></input>
        <p>{journalEntry.journalEntry.thirdquestion}</p>
        <input className="dailyEntry"
        type="text" placeholder={journalEntry.journalEntry.thirdquestion} 
        value={thirdQuestion} 
        onChange={e => setThirdQuestion(e.target.value)}></input>
        <p>Previous Mood Rating: {journalEntry.journalEntry.moodrating}</p>
            <button id="1" type="button" onClick={handleClick}>1</button>
            <button id="2" type="button" onClick={handleClick}>2</button>
            <button id="3" type="button" onClick={handleClick}>3</button>
            <button id="4" type="button" onClick={handleClick}>4</button>
            <button id="5" type="button" onClick={handleClick}>5</button>
        <p>{journalEntry.journalEntry.addcomments}</p>
        <input className="dailyEntry"
        type="text" 
        placeholder={journalEntry.journalEntry.addcomments} value={addComments} 
        onChange={e => setAddComments(e.target.value)}></input>
        <button onClick={handleSubmitClick} id={journalEntry.journalEntry.id}>Submit Changes</button>
    </>
    )

};

export default EditEntry