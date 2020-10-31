import React from 'react';


// importerar css för komponenten
import './overview.css';

const Overview = (props) => {

    const {height, mass, gender} = props

    return (
        <div className="overview">
            <h3>Assists (Height)</h3><p>7 {props.height}</p>
            <h3>Goals (Mass)</h3><p>8 {props.mass}</p>
            <h3>Matches (Gender)</h3><p>22 {props.gender}</p>
        </div>
    )
}

export default Overview
