import React from 'react';


// importerar css för komponenten
import './performance.css';

const Performance = (props) => {

    const {gender, hair_color, skin_color } = props

    return (
        <div className="playerPerformance" >
            <h3>{gender}</h3>
            <h3>{hair_color}</h3>
            <h3>{skin_color}</h3>
            <p>Kanske visa data med hjälp av d3 react....</p>
        </div>
    )
}

export default Performance
