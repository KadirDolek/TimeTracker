import './MainCard.css'
import React, { useState } from 'react'
import Photo from "../../assets/images/image-jeremy.png"

export default function MainCard({ onTimeframeChange }){
    const [activeTimeframe, setActiveTimeframe] = useState('daily');

    const handleClick = (timeframe) => {
        setActiveTimeframe(timeframe);
        onTimeframeChange(timeframe);
    }

    return(
        <div id='PartieUn'>
            <img src={Photo} alt="" />
            <span id='span'>Report for <p id='zzz'>Jeremy Robson</p></span>
            <div id='PartieUnBis'>
                <p style={{marginBottom:'-20px'}}
                    onClick={() => handleClick('daily')}
                    className={activeTimeframe === 'daily' ? 'active' : ''}
                >
                    Daily
                </p>
                <p style={{marginBottom:'-20px'}} 
                    onClick={() => handleClick('weekly')}
                    className={activeTimeframe === 'weekly' ? 'active' : ''}
                >
                    Weekly
                </p>
                <p 
                    onClick={() => handleClick('monthly')}
                    className={activeTimeframe === 'monthly' ? 'active' : ''}
                >
                    Monthly
                </p>
            </div>
        </div>
    )
}