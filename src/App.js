import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { List } from './list';

function App() {

  const [storyIds, setStoryIds] = useState([])

  async function getTopStoriesIds() {
    try {
      const { data } = await axios.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      setStoryIds(data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getTopStoriesIds()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>its hacker news bruh</p>
        <List ids={storyIds} />
      </header>
    </div>
  );
}

export default App;
