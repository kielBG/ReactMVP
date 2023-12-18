

function JournalEntry ({journalEntry}) {
    return (
    <>
    <div className="card">
        <p>{journalEntry.questionOne}</p>
        <p>{journalEntry.questionTwo}</p>
        <p>{journalEntry.questionThree}</p>
        <p>{journalEntry.moodRating}</p>
        <p>{journalEntry.addComments}</p>
    </div>
    </>
    )
}

export default JournalEntry