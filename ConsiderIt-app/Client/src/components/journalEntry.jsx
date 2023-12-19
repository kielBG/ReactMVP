import EditEntry from "./editEntry";
import { useState } from "react";


function JournalEntry ({journalEntry, deleteEntry, editJournalEntry}) {
    const [editView, setEditView] = useState(false)

    const deleteClick = (e) => {
        deleteEntry(journalEntry.id)
    }

    const editClick = (e) => {
        setEditView(true)
    }

    const exitEditView = () => {
        setEditView(false);
    }

    if(!editView) {
    return (
    <>
    <div className="entryCard">
        <p>{journalEntry.firstquestion}</p>
        <p>{journalEntry.secondquestion}</p>
        <p>{journalEntry.thirdquestion}</p>
        <p>{journalEntry.moodrating}</p>
        <p>{journalEntry.addcomments}</p>
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
        exitEditView={exitEditView}/>
        </div>
        </>

        )
    } 
}

export default JournalEntry