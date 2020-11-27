import PlayerController from '../controllers/Player.controller.js'

const routes = (app) => {
	app.post('/player', PlayerController.createPlayer)
	app.get('/player', PlayerController.getAllPlayers)
	app.get('/player/:playerId', PlayerController.getPlayerWithId)
	app.get('/searchplayer', PlayerController.getPlayerWithPlayernameQuery)
	app.put('/player/:playerId', PlayerController.updatePlayer)
	app.delete('/player/:playerId', PlayerController.deletePlayer)
}

export default {
	routes
}