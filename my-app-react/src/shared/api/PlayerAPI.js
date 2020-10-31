import Axios from 'axios'

const PlayerAPI = Axios.create({
    baseURL: 'https://swapi.dev/api/people'
})

export default PlayerAPI
