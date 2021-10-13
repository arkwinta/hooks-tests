import { useEffect, useState } from 'react'
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import { Map } from './map'

function App() {

  const [covidData, setCovidData] = useState({})

  async function getData() {
    try {
      const response = await axios.get("https://disease.sh/v3/covid-19/historical/all?lastDays=all");
      const { data } = response
      setCovidData(data)
    } catch (e) {
      console.log(e)
    }
  }


  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <Map covidData={covidData} />
    </div>
  );
}

export default App;
