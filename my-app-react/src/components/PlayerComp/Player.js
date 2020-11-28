import React, { useState, useEffect } from 'react'
import Axios from 'axios'

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

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
        Axios.get(`http://localhost:5000/player`)
            .then(({ data }) => setData(data))
            .catch((error) => console.log(error))
    }




    const playerRight = () => {
        setPlayer(player + 1)
        setPlayer(player + 1)
        if (player >= data.length - 1) {
            setPlayer(0)
        }

    }
    const playerLeft = () => {
        console.log(player)
        console.log(data.length);
        setPlayer(player - 1)
        if (player <= 0) {
            setPlayer(data.length - 1)
        }

    }

    useEffect(() => {
        fetchPlayerData();
    }, [player])

    const showPlayer = () => {
        if (data) {
            return <>
                <button onClick={() => playerLeft()}><FiArrowLeft /></button>
                <div>
                    <h2>{data[player].playername}</h2>
                    <img src={data[player].playerimg} alt="Football player" /><br />
                </div>
                <button onClick={() => playerRight()}><FiArrowRight /></button>

            </>
        }
    }
    console.log(data);
    // let {...newPlayer} = data[0]
    // console.log(newPlayer);


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
            <div className="playerArea">
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
