import { useState, useEffect } from 'react'
import './App.css'
import Welcome from "./components/welcome.jsx"
import DailyJournal from "./components/dailyJournal.jsx"
import JournalEntries from "./components/journalEntries.jsx"
import Loading from "./components/loading.jsx"

function App() {
  const [name, setName] = useState("");
  const [journalEntry, setJournalEntry] = useState([]);
  const [journalEntries, setJournalEntries] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect (() => {
    const getPrevPosts = async () => {
      const res = await fetch(`http://localhost:8000/api/journal/${name}`);
      const data =  await res.json();
      console.log(data)
      setJournalEntries(data);
    }
    if (name) {
      getPrevPosts();
    }
    

  }, [name]);
  

  const userName = (text) => {
    setName(text)
    
  }

  const dailyEntry = (obj) => {
    setJournalEntry([{name, ...obj}]);
  }


  if (!name && journalEntry.length === 0) {

    //welcome page with name input
    //wrapper func with setState for the name, set loading for fetch (get all)
    
    return <Welcome userName={userName}/>

  } else if (journalEntry.length === 0) {

    //daily journal page with journal inputs
    //local state for saving the entries poss and set state for saving the entries in a object, set loading for fetch (create)

    return <DailyJournal dailyEntry={dailyEntry}/>

  } else {

    //main page with prev entries
    //state of all journal entries to map into multiple cards, set loading for fetch (put and delete, maybe a get one)
    return <JournalEntries journalEntries={journalEntries}/>
  }

  //loading
  //state of loading (t or f)
  //<Loading />
}

export default App
