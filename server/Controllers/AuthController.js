const UserModel = require('../Models/UserModel');

exports.register = async (req, res) => {
	try {
		const { username, password, email } = req.body;

		const newUser = await UserModel.create({
			username,
			password,
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
