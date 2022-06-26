import mongoose from "mongoose";

const Users = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true},
		password: { type: String, required: true },
        email: { type: String, required: true , unique: true},
        role: { type: Number, required: false },
		avatar: { type: String, required: false },
		description: { type: String, required: false, maxlength: 200 }
	},
	{ collection: 'users' }
)

const users = mongoose.model('Users', Users);

export default users;