import { useState, useEffect } from 'react'
import './App.css'
import Welcome from "./components/welcome.jsx"
import DailyJournal from "./components/dailyJournal.jsx"
import JournalEntries from "./components/journalEntries.jsx"

function App() {
  const [name, setName] = useState("");
  const [journalEntry, setJournalEntry] = useState("");
  const [journalEntries, setJournalEntries] = useState([]);


  useEffect (() => {
    const getPrevPosts = async () => {
      const res = await fetch(`https://considerit-server.onrender.com/api/journal/${name}`);
      const data =  await res.json();
      setJournalEntries(data);
    }
    if (name) {
      getPrevPosts();
    }
    

  }, [name]);

  useEffect (() => {
    const createPost = async () => {
      const res = await fetch(`https://considerit-server.onrender.com/api/journal`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(journalEntry)
      });
    }

    if (journalEntry === true) {
      return "didn't run a post";

    } else if (journalEntry) {
      createPost();
      setJournalEntry(true)
    }

    

  }, [journalEntry]);


  const deleteEntry = async (id) => {
    
    const res = await fetch(`https://considerit-server.onrender.com/api/journal/${id}`, {
        method: "DELETE"
      });
      
      function filterByID(item) {
        if (item.id !== id) {
          return true;
        }
        return false;
      }

      const updatedEntries = journalEntries.filter(filterByID);

      setJournalEntries(updatedEntries);

  }
  

  const userName = (text) => {
    setName(text)
    
  }

  const dailyEntry = (obj) => {
    const newEntry = {name, ...obj}
    const newEntryWithId = {
      id: journalEntries[journalEntries.length - 1].id + 1 ,
      ...newEntry
    }
    const newEntries = [...journalEntries, newEntryWithId]
    setJournalEntries(newEntries)
    setJournalEntry(newEntry);
  }


  if (!name && !journalEntry) {

    //welcome page with name input
    //wrapper func with setState for the name, set loading for fetch (get all)
    
    return <Welcome userName={userName}/>

  } else if (!journalEntry) {

    //daily journal page with journal inputs
    //local state for saving the entries poss and set state for saving the entries in a object, set loading for fetch (create)

    return <DailyJournal dailyEntry={dailyEntry}/>

  } else {

    //main page with prev entries
    //state of all journal entries to map into multiple cards, set loading for fetch (put and delete, maybe a get one)
    return <JournalEntries journalEntries={journalEntries}
    deleteEntry={deleteEntry}
    />
  }

}

export default App
