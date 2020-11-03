import React, { useState,useEffect } from 'react'
import Axios from 'axios'


// importerar komponenter
import Overview from '../../components/PlayerOverviewComp/Overview';
import Performance from '../../components/PlayerPerfComp/Performance';

// importerar css för komponenten
import './player.css';
// import Player img
import noplayerimg from '../../shared/images/noplayerimg.png';



const Player = () => {

    const [data, setData] = useState()
    const [player, setPlayer] = useState(1)

// skapar en variabel för att spara data.
var fetchPlayerData = () => {
    // hämtar data från API
    Axios.get(`https://swapi.dev/api/people/${player}`)
    .then(({data}) => setData(data))
    .catch((error) => console.log(error))
}
useEffect(() => {
    fetchPlayerData()
}, [player])
// console.log(player)
const showPlayer = () => {
    if(data) {
        const {starships} = data 
        return <>
           <h2>{data.name}</h2> 
           <h2>{starships[0]}</h2> 
       </>
    }
}

    return (
        
        <section className="playerComp">
        <button onClick={()=> setPlayer( player + 1 )}>Next player</button>
 
            <div>
                {showPlayer()}
                
                <img src={noplayerimg} alt="Football player" />
            </div>
            <div className="accordian-holder">
                <div>
                    <input type="radio" checked={true} name="myaccordian" id="Applications" />
                    <label htmlFor="Applications">Overview</label>
                    <div className="inside-container">
                        <Overview {...data}/>
                    </div>
                </div>
                <div>
                    <input type="radio" name="myaccordian" id="Functions" />
                    <label className="performanceAcc" htmlFor="Functions">Performance</label>
                    <div className="inside-container backgroundColor">
                        <Performance {...data}/>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Player
