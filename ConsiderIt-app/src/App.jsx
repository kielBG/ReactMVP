import { useState, useEffect } from 'react'
import './App.css'
import Welcome from "./components/welcome.jsx"
import DailyJournal from "./components/dailyJournal.jsx"
function App() {
  const [name, setName] = useState("");
  const [journalEntry, setJournalEntry] = useState([]);
  const [journalEntries, setJournalEntries] = useState([]);
  const [loading, setLoading] = useState(false);

  const userName = (text) => {
    setName(text);
  }

  const dailyEntry = (obj) => {
    setJournalEntry([obj]);
  }


  return (
  //welcome page with name input
  //wrapper func with setState for the name, set loading for fetch (get all)
  // <Welcome userName={userName}/>

  //daily journal page with journal inputs
  //local state for saving the entries poss and set state for saving the entries in a object, set loading for fetch (create)
  <DailyJournal dailyEntry={dailyEntry}/>

  //main page with prev entries
  //state of all journal entries to map into multiple cards, set loading for fetch (put and delete, maybe a get one)

  //loading
  //state of loading (t or f)
  )

}

export default App
