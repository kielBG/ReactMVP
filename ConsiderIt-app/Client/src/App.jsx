import { useState, useEffect } from 'react'
import './App.css'
import Welcome from "./components/welcome.jsx"
import DailyJournal from "./components/dailyJournal.jsx"
import JournalEntries from "./components/journalEntries.jsx"
import HomeButton from './components/homeButton.jsx'
import Loading from './components/loading.jsx'

function App() {
  const [name, setName] = useState("");
  const [journalEntry, setJournalEntry] = useState("");
  const [journalEntries, setJournalEntries] = useState([]);
  const [editView, setEditView] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect (() => {
    const getPrevPosts = async () => {
      const res = await fetch(`https://considerit-server.onrender.com/api/journal/${name}`);
      //http://localhost:8000/api/journal/${name}
      const data =  await res.json();

      setJournalEntries(data);
      setLoading(false);
    }
    if (name) {
      setLoading(true);
      getPrevPosts();
    }
    

  }, [name]);

  useEffect (() => {
    const createPost = async () => {
      //http://localhost:8000/api/journal
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
    //http://localhost:8000/api/journal/${id}
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
    //http://localhost:8000/api/journal/${id}
    const res = await fetch(`https://considerit-server.onrender.com/api/journal/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    });

    const getEdittedPosts = async () => {
      //http://localhost:8000/api/journal/${name}
      const res = await fetch(`https://considerit-server.onrender.com/api/journal/${name}`);
      const data =  await res.json();
      setJournalEntries(data);
      setLoading(false)
    }
    setLoading(true)
    getEdittedPosts();

  }

  const home = () => {
    setJournalEntry(true)
  }

  const userName = (text) => {
    setName(text)
    
  }

  const dailyEntry = (obj) => {
    const newEntry = {name, ...obj};
    if (journalEntries.length > 0) {
      const newEntryWithId = {
        id: journalEntries[journalEntries.length - 1].id + 1 ,
        ...newEntry
      }
      const newEntries = [...journalEntries, newEntryWithId]
      setJournalEntries(newEntries);
      setJournalEntry(newEntry);
    } else {
      setJournalEntries([newEntry]);
      setJournalEntry(newEntry);
    }
    
  }

  const changeEditView = (boolean) => {
    setEditView(boolean)
  }


  return (
    <>
    <HomeButton home={home} 
    name={name}
    changeEditView={changeEditView}/>
    <div className='mainContainer'>
      {loading ? <Loading /> :
      !name && !journalEntry
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
              editView={editView}
              changeEditView={changeEditView}
            />
      }
    </div>
    </>
  );

}

export default App
