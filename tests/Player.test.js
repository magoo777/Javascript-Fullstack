/* eslint-disable indent */
import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import { describe, it as test } from 'mocha'
import StatusCode from '../configuration/StatusCode.js'
import app from '../Server.js'

Chai.should()
Chai.use(ChaiHTTP)

const randomString = Math.random().toString(36).substring(7)
const randomNbr = 5335
const playerId = '5fbd34f36c9b8c4e74cbd995'
const player = {
    playername: randomString,
    playerteam: randomString,
    playernumber: randomNbr,
    playerass: randomNbr,
    playergoals: randomNbr,
    playermatches: randomNbr,
    playerimg: randomString,
}


const testingNonExistentRoute = () => {
    describe('Testing a route that does not exist', () => {
        test('Expecting 404 not found', (done) => {
            Chai.request(app)
                .get(`/${randomString}`)
                .end((request, response) => {
                    response.should.have.a.status(StatusCode.NOT_FOUND)
                    done()
                })
        })
    })
}

const createPlayer = () => {
    describe('Testing to create a player(POST)', () => {
        test('Expecting a player to be created', (done) => {
            Chai.request(app)
                .post('/player')
                .send(player)
                .end((error, response) => {
                    response.should.have.a.status(StatusCode.CREATED)
                    response.body.should.be.a('object')
                    response.body.should.have.property('playername').eq(player.playername)
                    response.body.should.have.property('playerteam').eq(player.playerteam)
                    response.body.should.have.property('playernumber').eq(player.playernumber)
                    response.body.should.have.property('playerass').eq(player.playerass)
                    response.body.should.have.property('playergoals').eq(player.playergoals)
                    response.body.should.have.property('playermatches').eq(player.playermatches)
                    response.body.should.have.property('playerimg').eq(player.playerimg)
                    done()
                })
        })
    })
}
const getAllPlayers = () => {
    describe('Fetching all players(GET)', () => {
        test('Expecting to return all players', (done) => {
            Chai.request(app)
                .get('/player')
                .end((error, response) => {
                    response.should.have.status(StatusCode.OK)
                    response.body.should.be.a('array')
                    response.body.length.should.be.eq(response.body.length)
                    done()
                })
        })
    })
}
const updatePlayer = () => {
    describe('Testing to update a player(PUT)', () => {
        test('Expecting to update a player', (done) => {
            Chai.request(app)
                .put(`/player/${playerId}`)
                .send(player)
                .end((error, response) => {
                    response.should.have.status(StatusCode.OK)
                    response.body.should.be.a('object')
                    response.body.should.have.property('_id').eq(playerId)
                    response.body.should.have.property('playername').eq(player.playername)
                    response.body.should.have.property('playerteam').eq(player.playerteam)
                    response.body.should.have.property('playernumber').eq(player.playernumber)
                    response.body.should.have.property('playerass').eq(player.playerass)
                    response.body.should.have.property('playergoals').eq(player.playergoals)
                    response.body.should.have.property('playermatches').eq(player.playermatches)
                    response.body.should.have.property('playerimg').eq(player.playerimg)
                    done()
                })
        })
    })
}
const deletePlayer = () => {
    describe('Testing to delete a player(DELETE)', () => {
        test('Expecting to delete a player', (done) => {
            Chai.request(app)
                .delete(`/player/${playerId}`)
                .end((error, response) => {
                    response.should.have.status(StatusCode.OK)
                    done()
                })
        })
    })
}


describe('TESTING THE PLAYER_API ROUTE', () => {
    testingNonExistentRoute(),
        createPlayer(),
        getAllPlayers(),
        updatePlayer(),
        deletePlayer()
})
