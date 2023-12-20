import EditEntry from "./editEntry";
import { useState } from "react";


function JournalEntry ({journalEntry, deleteEntry, editJournalEntry, editView, changeEditView}) {

    const deleteClick = (e) => {
        deleteEntry(journalEntry.id)
    }

    const editClick = (e) => {
        changeEditView(true)
    }

    if(!editView) {
    return (
    <>
    <div className="entryCard">
        <h5>How you were feeling -</h5>
        <p>{journalEntry.firstquestion}</p>
        <h5>How you managed challenges -</h5>
        <p>{journalEntry.secondquestion}</p>
        <p className="tooltip">Some advice from a friend.<span className="tooltiptext">{journalEntry.thirdquestion}</span></p>
        <p>How you rated this day: {journalEntry.moodrating}/5</p>
        <p className="tooltip">Something from you, for you!<span className="tooltiptext">{journalEntry.addcomments}</span></p>
        <button onClick={editClick} id={journalEntry.id}>edit</button>
        <button onClick={deleteClick} id={journalEntry.id}>delete</button>
    </div>
    </>
    )
    }else {
        return (

        <>
        <div className="entryCard">
        <EditEntry journalEntry={journalEntry}
        editJournalEntry={editJournalEntry}
        changeEditView={changeEditView} />
        </div>
        </>

        )
    } 
}

export default JournalEntry