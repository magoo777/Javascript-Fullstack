import React from 'react'

// importerar komponenter
import Overview from '../../components/PlayerOverviewComp/Overview';
import Performance from '../../components/PlayerPerfComp/Performance';

// importerar css för komponenten
import './player.css';
// import Player img
import noplayerimg from '../../shared/images/noplayerimg.png';

const Player = () => {

    const active = () => {
        alert('klicked')
    }

    return (
        <section className="playerComp">
            <div>
                <h2>Player Name</h2>
                <img src={noplayerimg} alt="Football player" />
            </div>

            <Overview />
            <Performance />
        </section>
    )
}

export default Player
