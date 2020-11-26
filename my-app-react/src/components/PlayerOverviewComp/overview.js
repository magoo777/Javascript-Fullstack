import React from 'react';


// importerar css för komponenten
import './overview.css';

const Overview = (props) => {

    const { playerass, playergoals, playermatches } = props
    console.log("detta är props:" + playerass);
    return (
        <div className="overview">
            <h3>Assists </h3><p> {playerass}</p>
            <h3>Goals </h3><p> {playergoals}</p>
            <h3>Matches </h3><p> {playermatches}</p>
        </div>
    )
}

export default Overview
