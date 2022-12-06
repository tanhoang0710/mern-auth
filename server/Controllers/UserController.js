const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../Models/UserModel');

exports.getListUser = async (req, res) => {
	const users = await UserModel.find().select('-password');

	res.status(200).json({
		status: 'success',
		data: {
			users,
		},
	});
};
exports.getOneUser = (req, res) => {
	res.send('detail user');
};

exports.postUser = async (req, res) => {
	const { username, password, email, role } = req.body;

	// 3. save data to collection
	const user = await UserModel.create({
		username,
		password: bcrypt.hashSync(password, 10),
		email,
		role,
	});

	res.status(200).json({
		status: 'success',
		data: {
			user,
		},
	});
};
