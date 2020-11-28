/* eslint-disable no-undef */
import dotenv from 'dotenv'

dotenv.config()


const notFound = (req, res, next) => {
	const error = new Error(`Not found: ${req.originalUrl} `)
	res.status(404)
	next(error)
}

// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
	const statuscode = res.statusCode === 200 ? 500 : res.statusCode
	res.status(statuscode)
	res.json({
		statuscode: statuscode,
		message: error.message,
		stacktrace: process.env.NODE_ENV === 'production' ? 'Nice try' : error.stack,
	})
}

export default {
	notFound,
	errorHandler
}