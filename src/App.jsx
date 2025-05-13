import React, { useState } from 'react'
import './App.css'
import Card from './Components/Card/Card'
import MainCard from './Components/MainCard/MainCard'
import data from './data.json'

function App() {
  const [currentTimeframe, setCurrentTimeframe] = useState('daily');

  const handleTimeframeChange = (timeframe) => {
    setCurrentTimeframe(timeframe);
  }

  return (
    <>
      <MainCard onTimeframeChange={handleTimeframeChange}/>
      <div id='PartieDeux'>
        {data.map((tableau, index) => (
          <Card 
            key={index} 
            donnee={tableau}
            timeframe={currentTimeframe}
          />
        ))}    
      </div>
    </>
  )
}

export default App
