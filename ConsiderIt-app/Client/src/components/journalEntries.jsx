import JournalEntry from "./journalEntry"


function JournalEntries({journalEntries, deleteEntry, editJournalEntry}) {


    return journalEntries.map( (journalEntry) => (
        <>
        <div  key={journalEntry.id}>
        <JournalEntry journalEntry={journalEntry} 
        deleteEntry={deleteEntry}
        editJournalEntry={editJournalEntry}/>
        </div>
        </>
        
    ))
}

export default JournalEntries