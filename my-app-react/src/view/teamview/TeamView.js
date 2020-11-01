import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import TeamService from '../../shared/api/service/TeamService'

// import Player img
import noplayerimg from '../../shared/images/noplayerimg.png';

const TeamView = () => {

    const [team, setTeam] = useState();
    const [search, setSearch] = useState();

    var fetchTeams = () => {
     
     TeamService.searchForTeam(search.toLowerCase())
     .then(({data}) => setTeam(data))
     .catch(error => console.log(error))
    }

    const showTeam = () => {
        if(team){
           return (
               <div>
           <h2>Team Namn ({team.name})</h2>
           <h3>Id {team.id}</h3>
           <h3>Weight:{team.weight}</h3>
           <h3>Height: {team.height}</h3>
           <h3>Type: {team.types[0].type.name}</h3>
           </div>
           ) 
        }
    }

    return (
        <main>
            <div>
                <button onClick={()=> fetchTeams()}>Hämta API</button>
                <input onChange={(e) => setSearch(e.target.value)} />
                {showTeam()}  
                <img src={noplayerimg} alt="Football player" />
            </div>


        </main>


    )
}

export default TeamView
