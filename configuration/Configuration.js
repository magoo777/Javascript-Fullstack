/* eslint-disable no-undef */
import mongoose from 'mongoose'


const connectToDatabase = async () => {
	try {
		await mongoose.connect('mongodb+srv://mats123:mats123>@test.33yny.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
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