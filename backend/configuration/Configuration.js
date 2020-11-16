import mongoose from 'mongoose'
import dotenv from 'dotenv'


dotenv.config()

const connectToDatabase = async () => {
	try {
		const DB_URL = process.env.DATABASE_URL
		await mongoose.connect( DB_URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
		console.log('Successssss!!!')
	} catch (error) {
		console.log('ERROR WHILE TRYING TO CONNECT TO THE DATABASE: ', error)
		process.exit()
	}
}

const connectToPort = (app) => {
	const port = process.env.PORT
	app.listen(port, () => {
		console.log(`Servern är igång på port: ${port}`)
	})
}

export default {
	connectToDatabase,
	connectToPort
}    