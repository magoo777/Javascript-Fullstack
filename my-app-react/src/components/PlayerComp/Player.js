import React, { useState, useEffect } from 'react'
import Axios from 'axios'


// importerar komponenter
import Overview from '../../components/PlayerOverviewComp/Overview';
import Performance from '../../components/PlayerPerfComp/Performance';

// importerar css för komponenten
import './player.css';
// import Player img



const Player = () => {

    const [data, setData] = useState()
    const [player, setPlayer] = useState(0)

    // skapar en variabel för att spara data.
    var fetchPlayerData = () => {
        // hämtar data från API
        //Axios.get(`http://localhost:3001/searchplayer?playernumber=${player}`)
        Axios.get(`http://localhost:3001/player`)
            .then(({ data }) => setData(data))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        fetchPlayerData()
    }, [player])

    console.log(player)

    const showPlayer = () => {
        if (data) {
            return <>
                <h2>{data[player].playername}</h2>
                <img src={data[player].playerimg} alt="Football player" />
            </>
        }
    }
    console.log(data)
    return (

        <section className="playerComp">
            <button onClick={() => setPlayer(player + 1)}>Next player</button>

            <div>
                {showPlayer()}
            </div>
            <div className="accordian-holder">
                <div>
                    <input type="radio" checked={true} name="myaccordian" id="Applications" />
                    <label htmlFor="Applications">Overview</label>
                    <div className="inside-container">
                        <Overview {...data} />
                        {console.log("Console log" + data)}
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
