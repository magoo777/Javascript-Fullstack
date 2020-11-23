import PlayerModel from '../models/Player.model.js'
import StatusCode from '../../configuration/StatusCode.js'

const createPlayer = async (req, res) => {
	const player = new PlayerModel({
		playername: req.body.playername,
		playerteam: req.body.playerteam,
		playernumber: req.body.playernumber,
		playerass: req.body.playerass,
		playergoals: req.body.playergoals,
		playermatches: req.body.playermatches,
		playerimg: req.body.playerimg,
	})
    
	try {
		const response = await player.save()
		res.status(StatusCode.CREATED).send(response)
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}

}

const getAllPlayers = async (req, res) => {
	try {
		const response = await PlayerModel.find()
		res.status(StatusCode.OK).send(response)
	} catch(error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({message: error.message})
	}
}

const getPlayerWithId = async (req, res) => {
	try {
		const response = await PlayerModel.findById(req.params.playerId)
		res.status(StatusCode.OK).send(response)
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({message: 'Error while trying to get ID: ' + req.params.playerId,
			error: error.message })
	}
}

const getPlayerWithPlayernameQuery = async (req, res) => {
	try {
		const response = await PlayerModel.find({ playername: req.query.playername })
		response.length !== 0 
			? res.status(StatusCode.OK).send(response) 
			: res.status(StatusCode.NOT_FOUND).send({message: 'Could not find player: ' + req.query.playername}) 
		
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
			message: 'Error while trying to recive playername:' + req.query.playerId,
			error: error.message
		})
	}
}

const updatePlayer = async (req, res) => {
	try {
		if(!req.body) {return res.status(400).send({message: 'Cannot update empty values'})}
		const response = await PlayerModel.findByIdAndUpdate(req.params.playerId, {
			playername: req.body.playername,
			playerteam: req.body.playerteam,
			playernumber: req.body.playernumber,
			playerass: req.body.playerass,
			playergoals: req.body.playergoals,
			playermatches: req.body.playermatches,
			playerimg: req.body.playerimg,
		}, {new: true})
		res.status(StatusCode.OK).send(response)
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
			message: 'Error occured while updating, playerID: ' + req.params.playerId,
			error: error.message
		})
	}
}

const deletePlayer = async (req, res) => {
	try {
		const response = await PlayerModel.findByIdAndDelete(req.params.playerId)
		res.status(StatusCode.OK).send({
			message: `Sucessfully deleted the USER with username: ${response.playername} and ID: ${req.params.playerId}`
		})
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
			message: 'Error occured while trying to delete user with the ID: ' +req.params.playerId,
			error: error.message
		})
	}
}

export default {
	createPlayer,
	getAllPlayers,
	getPlayerWithId,
	getPlayerWithPlayernameQuery,
	updatePlayer,
	deletePlayer
}

