import JournalEntry from "./journalEntry"


function JournalEntries({journalEntries, deleteEntry, editJournalEntry, changeEditView, editView}) {
    const reversedEntries = journalEntries.slice().reverse()

    return reversedEntries.map( (journalEntry) => (
        <>
        <div className="journal" key={journalEntry.id}>
        <JournalEntry journalEntry={journalEntry} 
        deleteEntry={deleteEntry}
        editJournalEntry={editJournalEntry}
        changeEditView={changeEditView}
        editView={editView}/>
        </div>
        </>
        
    ))
}

export default JournalEntries