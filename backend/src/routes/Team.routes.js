import TeamController from '../controllers/Team.controller.js'

const routes = (app) => {
	app.post('/team', TeamController.createTeam)
	app.get('/team', TeamController.getAllTeams)
	app.get('/team/:teamId', TeamController.getTeamWithId)
	app.get('/searchteam', TeamController.getTeamWithTeamnameQuery)
	app.put('/team/:teamId', TeamController.updateTeam)
	app.delete('/team/:teamId', TeamController.deleteTeam)
}

export default {
	routes
}