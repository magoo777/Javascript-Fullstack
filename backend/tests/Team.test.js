/* eslint-disable indent */
import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import { describe, it as test } from 'mocha'
import StatusCode from '../configuration/StatusCode.js'
import app from '../Server.js'

Chai.should()
Chai.use(ChaiHTTP)

const randomString = Math.random().toString(36).substring(7)
const randomNbr = 4356
const teamId = '5fbd334d4035d577702124a6'
const team = {
    teamname: randomString,
    teamwins: randomNbr,
    teamdraws: randomNbr,
    teamloss: randomNbr,
    teamGF: randomNbr,
    teamGA: randomNbr,
}

const createteam = () => {
    describe('Testing to create a team(POST)', () => {
        test('Expecting a team to be created', (done) => {
            Chai.request(app)
                .post('/team')
                .send(team)
                .end((error, response) => {
                    response.should.have.a.status(StatusCode.CREATED)
                    response.body.should.be.a('object')
                    response.body.should.have.property('teamname').eq(team.teamname)
                    response.body.should.have.property('teamwins').eq(team.teamwins)
                    response.body.should.have.property('teamdraws').eq(team.teamdraws)
                    response.body.should.have.property('teamloss').eq(team.teamloss)
                    response.body.should.have.property('teamGF').eq(team.teamGF)
                    response.body.should.have.property('teamGA').eq(team.teamGA)
                    done()
                })
        })
    })
}
const getAllteams = () => {
    describe('Fetching all teams(GET)', () => {
        test('Expecting to return all teams', (done) => {
            Chai.request(app)
                .get('/team')
                .end((error, response) => {
                    response.should.have.status(StatusCode.OK)
                    response.body.should.be.a('array')
                    response.body.length.should.be.eq(response.body.length)
                    done()
                })
        })
    })
}
const updateteam = () => {
    describe('Testing to update a team(PUT)', () => {
        test('Expecting to update a team', (done) => {
            Chai.request(app)
                .put(`/team/${teamId}`)
                .send(team)
                .end((error, response) => {
                    response.should.have.status(StatusCode.OK)
                    response.body.should.be.a('object')
                    response.body.should.have.property('_id').eq(teamId)
                    response.body.should.have.property('teamname').eq(team.teamname)
                    response.body.should.have.property('teamwins').eq(team.teamwins)
                    response.body.should.have.property('teamdraws').eq(team.teamdraws)
                    response.body.should.have.property('teamloss').eq(team.teamloss)
                    response.body.should.have.property('teamGF').eq(team.teamGF)
                    response.body.should.have.property('teamGA').eq(team.teamGA)
                    done()
                })
        })
    })
}
const deleteteam = () => {
    describe('Testing to delete a team(DELETE)', () => {
        test('Expecting to delete a team', (done) => {
            Chai.request(app)
                .delete(`/team/${teamId}`)
                .end((error, response) => {
                    response.should.have.status(StatusCode.OK)
                    done()
                })
        })
    })
}


describe('TESTING THE team_API ROUTE', () => {
    createteam(),
        getAllteams(),
        updateteam(),
        deleteteam()
})
