const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	username: String,
	email: {
		type: String,
		unique: true,
	},
	password: String,
	role: String,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
