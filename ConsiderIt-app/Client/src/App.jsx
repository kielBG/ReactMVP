import { useState, useEffect } from 'react'
import './App.css'
import Welcome from "./components/welcome.jsx"
import DailyJournal from "./components/dailyJournal.jsx"
import JournalEntries from "./components/journalEntries.jsx"
import HomeButton from './components/homeButton.jsx'

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
      return () => {
        console.log("nope");
      };

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

  const editJournalEntry = async (id, obj) => {

    const res = await fetch(`https://considerit-server.onrender.com/api/journal/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    });

    const getEdittedPosts = async () => {
      const res = await fetch(`https://considerit-server.onrender.com/api/journal/${name}`);
      const data =  await res.json();
      setJournalEntries(data);
    }

    getEdittedPosts();

  }

  const home = () => {
    setJournalEntry(true)
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


  return (
    <>
    <HomeButton home={home} />
      {!name && !journalEntry
        ? <Welcome userName={userName} />
        : !journalEntry
          ? (
            <>
              <DailyJournal dailyEntry={dailyEntry} />
            </>
          )
          : <JournalEntries
              journalEntries={journalEntries}
              deleteEntry={deleteEntry}
              editJournalEntry={editJournalEntry}
            />
      }
    </>
  );

}

export default App

/*
if (!name && !journalEntry){
return (
  <Welcome username={username}
)
}
if ()


 
  if(!journalEntry){
    <Daily Journal dailyEntry={dailyEntry}
  }
)
}

*/