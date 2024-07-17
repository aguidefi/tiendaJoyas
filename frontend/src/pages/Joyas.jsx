import { useState, useEffect } from 'react';

export const urlBaseServer = "http://localhost:3000";

export const Joyas = () => {
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
    <div className='mostrar-container'>
      <ul className='list-group list-group-flush'>
          {joyas.map((joya, id) => (
            <li className='list-group-item' key={id} value={joya}>
              {joya.name} - <a href={urlBaseServer + joya.href}>Ver más</a>
            </li>
          ))}
        </ul>
    </div>
  )
}
