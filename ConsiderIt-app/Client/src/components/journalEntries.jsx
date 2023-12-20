import JournalEntry from "./journalEntry"


function JournalEntries({journalEntries, deleteEntry, editJournalEntry, changeEditView, editView}) {


    return journalEntries.map( (journalEntry) => (
        <>
        <div  key={journalEntry.id}>
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