import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [journalEntry, setJournalEntry] = useState([]);
  const [journalEntries, setJournalEntries] = useState([]);
  const [loading, setLoading] = useState(false);


  return <div>working</div>
  //welcome page with name input
  //wrapper func with setState for the name, set loading for fetch (get all)

  //daily journal page with journal inputs
  //local state for saving the entries poss and set state for saving the entries in a object, set loading for fetch (create)

  //main page with prev entries
  //state of all journal entries to map into multiple cards, set loading for fetch (put and delete, maybe a get one)

  //loading
  //state of loading (t or f)


}

export default App
