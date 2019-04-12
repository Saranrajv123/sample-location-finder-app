import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        seasonResult: "let's hit the beach",
        iconName: 'sun'
    },

    winter: {
        seasonResult: "burr its cold!",
        iconName: 'snowflake',

    }
}
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat < 0 ? 'winter' : 'summer';
    }
}
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    // const seasonResult = season === 'winter' ? 'burr, its chilly' : 'lets hit the beach';
    // const icon = season === 'winter' ? 'snowflake' : 'sun';
    const {seasonResult, iconName} = seasonConfig[season];
    console.log(seasonConfig[season])
    return (
        <div className={`season-display ${season}`}> 
            <i className={`icon-left massive ${iconName} icon`} />
            {seasonResult}
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    )
}

export default SeasonDisplay;