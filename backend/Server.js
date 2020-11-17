
import express from 'express' // framework for creating easier web/mob applications in node.js
import dotenv from 'dotenv'
import helmet from 'helmet' // adds security to the headers
import morgan from 'morgan' // log server events

import Configuration from './configuration/Configuration.js'

dotenv.config()
const app = express()

app.use(helmet())
app.use(morgan('common'))


app.get('/player',( req, res) => {
	res.send('Playerinfo, goals, ass etc.')
})

app.get('/teams',( req, res) => {
	res.send('Teams info, wins, loss etc.')
})

Configuration.connectToPort(app)


export default app




