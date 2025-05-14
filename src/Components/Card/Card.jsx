import './Card.css';
import React from 'react';
// Importez directement les images dans votre composant
import exercise from '/images/icon-exercise.svg';
import play from '/images/icon-play.svg';
import selfCare from '/images/icon-self-care.svg';
import social from '/images/icon-social.svg';
import study from '/images/icon-study.svg';
import work from '/images/icon-work.svg';

// Création d'un objet qui mappe les titres aux images
const iconMap = {
  'exercise': (`${exercise}`),
  'play': (`${play}`),
  'self care':(`${selfCare}`) ,
  'social':(`${social}`) ,
  'study':(`${study}`),
  'work': (`${work}`)
};

function Card({ donnee, timeframe }) {
  const currentData = donnee.timeframes[timeframe];
  const cardClass = `carte ${donnee.title.toLowerCase().replace(' ', '-')}`;
  
  // Récupérer la bonne icône en fonction du titre
  const iconKey = donnee.title.toLowerCase();
  const icon = iconMap[iconKey];

  return (
    <div className={cardClass}>
      <img
        src={icon}
        alt=""
        className="card-icon"
      />
      <div className='secondBg'>
        <h3>{donnee.title}</h3>
        <p>{currentData.current}hrs</p>
        <p>Last {timeframe === 'daily' ? 'Day' : timeframe === 'weekly' ? 'Week' : 'Month'} - {currentData.previous}hrs</p>
      </div>
    </div>
  );
}

export default Card;