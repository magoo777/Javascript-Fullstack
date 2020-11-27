import mongoose from 'mongoose'

const TeamSchema = mongoose.Schema(
	{
		teamname: String,
		teamwins: Number,
		teamdraws: Number,
		teamloss: Number,
		teamGF: Number,
		teamGA: Number,

	}, { timestamps: true }
)

const TeamModel = mongoose.model('team', TeamSchema)
export default TeamModel 
