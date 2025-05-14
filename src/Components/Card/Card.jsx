import './Card.css';
import React from 'react';
// Importez directement les images dans votre composant
import exerciseIcon from '/src/assets/images/icon-exercise.svg';
import playIcon from '/src/assets/images/icon-play.svg';
import selfCareIcon from '/src/assets/images/icon-self-care.svg';
import socialIcon from '/src/assets/images/icon-social.svg';
import studyIcon from '/src/assets/images/icon-study.svg';
import workIcon from '/src/assets/images/icon-work.svg';

// Création d'un objet qui mappe les titres aux images
const iconMap = {
  'exercise': (`${exerciseIcon}`),
  'play': (`${playIcon}`),
  'self care':(`${selfCareIcon}`) ,
  'social':(`${socialIcon}`) ,
  'study':(`${studyIcon}`),
  'work': (`${workIcon}`)
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