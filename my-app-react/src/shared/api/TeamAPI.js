import Axios from 'axios'

const TeamAPI = Axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

export default TeamAPI
