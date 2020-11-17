import dotenv from 'dotenv'

dotenv.config()

const connectToPort = (app) => {
	const port = process.env.PORT
	app.listen(port, () => {
		console.log(`SERVER IS RUNNING ON PORT: ${port}`)
	})
}

export default {
	connectToPort
}

