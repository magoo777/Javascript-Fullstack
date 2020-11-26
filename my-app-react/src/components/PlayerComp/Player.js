import React, { useState, useEffect } from 'react'
import Axios from 'axios'


// importerar komponenter
import Overview from '../../components/PlayerOverviewComp/Overview';
import Performance from '../../components/PlayerPerfComp/Performance';

// importerar css för komponenten
import './player.css';


const Player = () => {

    const [data, setData] = useState()
    const [player, setPlayer] = useState(0)

    // skapar en variabel för att spara data.
    var fetchPlayerData = () => {
        // hämtar data från API
        Axios.get(`http://localhost:3001/player`)
            .then(({ data }) => setData(data))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        fetchPlayerData()
    }, [player])

    const showPlayer = () => {
        if (data) {
            return <>
                <h2>{data[player].playername}</h2>
                <img src={data[player].playerimg} alt="Football player" />
            </>
        }
    }

    const showPlayer2 = () => {
        if (data) {
            return <>
                <h3>Assists </h3><p> {data[player].playerass}</p>
                <h3>Goals </h3><p> {data[player].playergoals}</p>
                <h3>Matches </h3><p> {data[player].playermatches}</p>
            </>
        }
    }

    return (

        <section className="playerComp">

            <button onClick={() => setPlayer(player + 1)}>Next player</button>
            {console.log("data=" + data)}
            {console.log("player=" + player)}
            <div>
                {showPlayer()}
            </div>
            <div className="accordian-holder">
                <div>
                    <input type="radio" checked={true} name="myaccordian" id="Applications" />
                    <label htmlFor="Applications">Overview</label>
                    <div className="inside-container">
                        {showPlayer2()}
                    </div>
                </div>
                <div>
                    <input type="radio" name="myaccordian" id="Functions" />
                    <label className="performanceAcc" htmlFor="Functions">Performance</label>
                    <div className="inside-container backgroundColor">
                        <Performance {...data} />
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Player
