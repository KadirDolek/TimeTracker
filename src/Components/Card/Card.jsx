import './Card.css';
import React from 'react'

function Card({ donnee, timeframe }) {
  const currentData = donnee.timeframes[timeframe];
  
  return (
    <div id='carte'>
        <div id='secondBg'>
            <div className="card">
            <h3>{donnee.title}</h3>
            <p>{currentData.current}hrs</p>
            <p>Last {timeframe === 'daily' ? 'Day' : timeframe === 'weekly' ? 'Week' : 'Month'} - {currentData.previous}hrs</p>
            </div>
        </div>
    </div>
  )
}

export default Card

