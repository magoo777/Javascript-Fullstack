import http from '../PlayerAPI'

const searchForPlayer = (playerSearch) => {
    return http.get(`/${playerSearch}`)

}

export default {
    searchForPlayer
}

