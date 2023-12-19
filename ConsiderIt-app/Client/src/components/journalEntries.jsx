import JournalEntry from "./journalEntry"


function JournalEntries({journalEntries, deleteEntry}) {


    return journalEntries.map( (journalEntry) => (
        <>
        <div  key={journalEntry.id}>
        <JournalEntry journalEntry={journalEntry} 
        deleteEntry={deleteEntry}/>
        </div>
        </>
        
    ))
}

export default JournalEntries