
function JournalEntry ({journalEntry, deleteEntry}) {

    const deleteClick = (e) => {

        deleteEntry(journalEntry.id)

    }

    const editClick = (e) => {
        console.log(edit);
    }


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
}

export default JournalEntry