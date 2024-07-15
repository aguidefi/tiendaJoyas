import { useState, useEffect } from 'react';
import './App.css'

const urlBaseServer = "http://localhost:3000";

function App() {
  const [joyas, setJoyas] = useState([]);

  useEffect (() => {
    const getJewlery = async () => {
      try {
        const response = await fetch(urlBaseServer + "/joyas");
        const data = await response.json();
        setJoyas(data.results)
        console.log(data.results)
        return data;
      } catch (error) {
        console.error(error)
      }
    };
    getJewlery()
  },[])

  return (
    <div className="App">
      <h1>Tienda de Joyas</h1>
      <ul>
        {joyas.map((joya, id) => (
          <li key={id} value={joya}>
            {joya.name} - <a href={urlBaseServer + joya.href}>Ver más</a>
          </li>
        ))}
      </ul>
    </div>

  )
}

export default App
