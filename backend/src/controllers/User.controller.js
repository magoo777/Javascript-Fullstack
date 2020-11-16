import UserModel from '../models/User.model.js'

const createUser = async (req, res) => {
	const user = new UserModel({
		username: req.body.username,
		password: req.body.password
	})
    
	try {
		const response = await user.save()
		res.status(201).send(response)
	} catch (error) {
		res.status(500).send({ message: error.message })
	}

}

const getAllUsers = async (req, res) => {
	try {
		const response = await UserModel.find()
		res.status(200).send(response)
	} catch(error) {
		res.status(500).send({message: error.message})
	}
}

const getUserWithId = async (req, res) => {
	try {
		const response = await UserModel.findById(req.params.userId)
		res.status(200).send(response)
	} catch (error) {
		res.status(500).send({message: 'Error while trying to get ID: ' + req.params.userId,
			error: error.message })
	}
}

const getUserWithUsernameQuery = async (req, res) => {
	try {
		const response = await UserModel.find({ username: req.query.username })
		response.length !== 0 
			? res.status(200).send(response) 
			: res.status(404).send({message: 'Could not find user: ' + req.query.username}) 
		
	} catch (error) {
		res.status(500).send({
			message: 'Error while trying to recive username:' + req.query.userId,
			error: error.message
		})
	}
}

const updateUser = async (req, res) => {
	try {
		if(!req.body) {return res.status(400).send({message: 'Cannot update empty values'})}
		const response = await UserModel.findByIdAndUpdate(req.params.userId, {
			username: req.body.username,
			password: req.body.password
		}, {new: true})
		res.status(200).send(response)
	} catch (error) {
		res.status(500).send({
			message: 'Error occured while updating, userID: ' + req.params.userId,
			error: error.message
		})
	}
}

export default {
	createUser,
	getAllUsers,
	getUserWithId,
	getUserWithUsernameQuery,
	updateUser
}

