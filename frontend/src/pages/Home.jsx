import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/joyas`)
  }

  return (
    <div className='joya-home'>
      <h2>My Precious</h2>
      <p>Inspirando elegancia</p>
      <button onClick={handleSubmit} >Ir a Joyas</button>
    </div>
  )
}