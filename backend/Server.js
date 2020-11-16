// const express = require('express');
import express from 'express' // framework for creating easier web/mob applications in node.js

import helmet from 'helmet' // adds security to the headers
import morgan from 'morgan' // log server events
import bodyParser from 'body-parser' 
import middlewares from './src/middleware/Middlewares.js'
import Configuration from './configuration/Configuration.js'
import UserRoutes from './src/routes/User.routes.js'


const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.use(helmet())
app.use(morgan('common'))
// app.use(isAuthenticated)

app.get('/team', isAuthenticated, (req , res) => {
	res.send('My favorite team')
})

app.get('/player', (req , res) => {
	res.send('Player info')
})

UserRoutes.routes(app)
app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

 

function isAuthenticated(req,res, next) {
	req.query.admin === 'true' 
		? res.send('You are admin')
		: res.send('You cannot make calls to this API URL')
	console.log(req.query.admin)
	next()
}


Configuration.connectToDatabase()
Configuration.connectToPort(app)







