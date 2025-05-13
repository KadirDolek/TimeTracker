import './Card.css';
import React from 'react'

function Card({ donnee, timeframe }) {
  const currentData = donnee.timeframes[timeframe];
  const cardClass = `carte ${donnee.title.toLowerCase().replace(' ', '-')}`;
  
  return (
    <div className={cardClass}>
      <img 
        src={`./src/assets/images/icon-${donnee.title.replace(' ', '-')}.svg`}
        alt={donnee.title}
        className="card-icon"
      />
      <div className='secondBg'>
        <h3>{donnee.title}</h3>
        <p>{currentData.current}hrs</p>
        <p>Last {timeframe === 'daily' ? 'Day' : timeframe === 'weekly' ? 'Week' : 'Month'} - {currentData.previous}hrs</p>
      </div>
    </div>
  )
}

export default Card

