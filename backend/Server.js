// const express = require('express');
import express from 'express'
import dotenv from 'dotenv'  // Hides
import helmet from 'helmet' // adds security to the headers
import morgan from 'morgan' // log server events
import middlewares from './src/middleware/Middlewares.js'


dotenv.config()
const app = express()
const port = process.env.PORT

app.use(helmet())
app.use(morgan('common'))
// app.use(isAuthenticated)

app.get('/recipe', (req , res) => {
	res.send('Pancakes')
})

app.get('/user', isAuthenticated, (req , res) => {
	// res.send('User')
})

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

function isAuthenticated(req,res, next) {
	req.query.admin === 'true' 
		? res.send('You are admin')
		: res.send('You cannot make calls to this API URL')
	console.log(req.query.admin)
	next()
}



app.listen(port, () => {
	console.log(`Servern är igång på ${port}`)
})









