

function JournalEntry ({journalEntry}) {
    return (
    <>
        <p>{journalEntry.firstquestion}</p>
        <p>{journalEntry.secondquestion}</p>
        <p>{journalEntry.thirdquestion}</p>
        <p>{journalEntry.moodrating}</p>
        <p>{journalEntry.addcomments}</p>
    </>
    )
}

export default JournalEntry