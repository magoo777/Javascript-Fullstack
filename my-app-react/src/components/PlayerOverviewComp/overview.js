import React from 'react';


// importerar css för komponenten
import './overview.css';

const Overview = () => {
    return (
        <div className="overview">
            <h2>Overview</h2>
            <h3>Assists</h3><p>7</p>
            <h3>Goals</h3><p>8</p>
            <h3>Matches</h3><p>22</p>
        </div>
    )
}

export default Overview
