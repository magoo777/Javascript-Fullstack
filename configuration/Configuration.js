/* eslint-disable no-undef */
import mongoose from 'mongoose'
import dotenv from 'dotenv'


dotenv.config()

const connectToDatabase = async () => {
	try {
		await mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/mats12345', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false
		})
		console.log('Connected to DB')
	} catch (error) {
		console.log('ERROR WHILE TRYING TO CONNECT TO THE DATABASE: ', error)
		process.exit()
	}
}

const connectToPort = (app) => {
	const port = process.env.PORT || 3001
	app.listen(port, () => {
		console.log(`Running on porten: ${port}`)
	})
}

export default {
	connectToDatabase,
	connectToPort
}    