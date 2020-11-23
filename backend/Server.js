
import express from 'express' // framework for creating easier web/mob applications in node.js
import dotenv from 'dotenv'
import helmet from 'helmet' // adds security to the headers
import morgan from 'morgan' // log server events
import bodyParser from 'body-parser' 
import Configuration from './configuration/Configuration.js'
import PlayerRoutes from './src/routes/Player.routes.js'
import TeamRoutes from './src/routes/Team.routes.js'
import middlewares from './src/middlewares/Middlewares.js'


dotenv.config()
const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(helmet())
app.use(morgan('common'))


// app.get('/user',( req, res) => {
// 	res.send('User info...')
// })

// app.get('/player',( req, res) => {
// 	res.send('Playerinfo, goals, ass etc.')
// })

// app.get('/team',( req, res) => {
// 	res.send('Teams info, wins, loss etc.')
// })

PlayerRoutes.routes(app)
TeamRoutes.routes(app)
app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

 
Configuration.connectToDatabase()
Configuration.connectToPort(app)
  

export default app


 

