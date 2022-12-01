const UserModel = require('../Models/UserModel');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
	try {
		const { username, password, email } = req.body;

		const newUser = await UserModel.create({
			username,
			password: bcrypt.hashSync(password, 10),
			email,
			role: 'regular',
		});
		res.status(201).json({
			status: 'success',
			data: {
				newUser,
			},
		});
	} catch (error) {
		console.log('error', error);
	}
};
