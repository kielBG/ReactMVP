import JournalEntry from "./journalEntry"


function JournalEntries({journalEntries}) {
    return journalEntries.map( (journalEntry) => (
        <>
        <div key={journalEntry.id}>
        <JournalEntry journalEntry={journalEntry}/>
        </div>
        </>
        
    ))
}

export default JournalEntries