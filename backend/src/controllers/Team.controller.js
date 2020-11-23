import TeamModel from '../models/Team.model.js'
import StatusCode from '../../configuration/StatusCode.js'

const createTeam = async (req, res) => {
	const team = new TeamModel({
		teamname: req.body.teamname,
		teamwins: req.body.teamwins,
		teamdraws: req.body.teamdraws,
		teamloss: req.body.teamloss,
		teamGF: req.body.teamGF,
		teamGA: req.body.teamGA,
	})
    
	try {
		const response = await team.save()
		res.status(StatusCode.CREATED).send(response)
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}

}

const getAllTeams = async (req, res) => {
	try {
		const response = await TeamModel.find()
		res.status(StatusCode.OK).send(response)
	} catch(error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({message: error.message})
	}
}

const getTeamWithId = async (req, res) => {
	try {
		const response = await TeamModel.findById(req.params.teamId)
		res.status(StatusCode.OK).send(response)
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({message: 'Error while trying to get ID: ' + req.params.teamId,
			error: error.message })
	}
}


const getTeamWithTeamnameQuery = async (req, res) => {
	try {
		const response = await TeamModel.find({ teamname: req.query.teamname })
		response.length !== 0 
			? res.status(StatusCode.OK).send(response) 
			: res.status(StatusCode.NOT_FOUND).send({message: 'Could not find team: ' + req.query.teamname}) 
		
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
			message: 'Error while trying to recive teamname:' + req.query.teamId,
			error: error.message
		})
	}
}

const updateTeam = async (req, res) => {
	try {
		if(!req.body) {return res.status(400).send({message: 'Cannot update empty values'})}
		const response = await TeamModel.findByIdAndUpdate(req.params.teamId, {
			teamname: req.body.teamname,
			teamwins: req.body.teamwins,
			teamdraws: req.body.teamdraws,
			teamloss: req.body.teamloss,
			teamGF: req.body.teamGF,
			teamGA: req.body.teamGA,
		}, {new: true})
		res.status(StatusCode.OK).send(response)
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
			message: 'Error occured while updating, teamID: ' + req.params.teamId,
			error: error.message
		})
	}
}

const deleteTeam = async (req, res) => {
	try {
		const response = await TeamModel.findByIdAndDelete(req.params.teamId)
		res.status(StatusCode.OK).send({
			message: `Sucessfully deleted the USER with username: ${response.teamname} and ID: ${req.params.teamId}`
		})
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
			message: 'Error occured while trying to delete user with the ID: ' +req.params.teamId,
			error: error.message
		})
	}
}

export default {
	createTeam,
	getAllTeams,
	getTeamWithId,
	getTeamWithTeamnameQuery,
	updateTeam,
	deleteTeam
}

