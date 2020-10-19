import React from 'react'

// importerar komponenter
import Overview from '../../components/PlayerOverviewComp/Overview';
import Performance from '../../components/PlayerPerfComp/Performance';

// importerar css för komponenten
import './player.css';
// import Player img
import noplayerimg from '../../shared/images/noplayerimg.png';

const Player = () => {


    return (
        <section className="playerComp">
            <div>
                <h2>Player Name</h2>
                <img src={noplayerimg} alt="Football player" />
            </div>
            <div className="accordian-holder">
                <div>
                    <input type="radio" checked name="myaccordian" id="Applications" />
                    <label for="Applications">Overview</label>
                    <div className="inside-container">
                        <Overview />
                    </div>
                </div>
                <div>
                    <input type="radio" name="myaccordian" id="Functions" />
                    <label className="performanceAcc" for="Functions">Performance</label>
                    <div className="inside-container backgroundColor">
                        <Performance />
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Player
