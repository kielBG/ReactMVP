import JournalEntry from "./journalEntry"


function JournalEntries({journalEntries}) {
    return journalEntries.map( (journalEntry) => (
        <JournalEntry journalEntry={journalEntry}/>
    ))
}

export default JournalEntries