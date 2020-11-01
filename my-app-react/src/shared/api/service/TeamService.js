import http from '../TeamAPI'

const searchForTeam = (teamSearch) => {
    return http.get(`/${teamSearch}`)

}

export default {
    searchForTeam
}

