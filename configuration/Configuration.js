/* eslint-disable no-undef */
import mongoose from 'mongoose'


const connectToDatabase = async () => {
	try {
		const DB_URL = process.env.DATABASE_URL
		await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
		console.log('Connected to DB')
	} catch (error) {
		console.log('ERROR WHILE TRYING TO CONNECT TO THE DATABASE: ', error)
		process.exit()
	}
}

const connectToPort = (app) => {
	const port = process.env.PORT || 3001
	app.listen(port, () => {
		console.log(`Running on port: ${port}`)
	})
}

export default {
	connectToDatabase,
	connectToPort
}    