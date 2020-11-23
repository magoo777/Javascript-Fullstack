import mongoose from 'mongoose'

const PlayerSchema = mongoose.Schema(
	{
		playername: String,
		playerteam: String,
		playernumber: Number,
		playerass: Number,
		playergoals: Number,
		playermatches: Number,
		playerimg: String
	}, { timestamps: true } // inbygd function i mongoose för datumvisning av händelser
)

const PlayerModel = mongoose.model('player', PlayerSchema)
export default PlayerModel 