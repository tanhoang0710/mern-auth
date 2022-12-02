const jwt = require('jsonwebtoken');
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

exports.login = async (req, res) => {
	try {
		const { email, password } = req.body;
		// check email

		const user = await UserModel.findOne({ email });
		if (!user) return res.status(400).json('invalid email or password');

		// check password
		const isValidPassword = bcrypt.compareSync(password, user.password);
		if (!isValidPassword)
			return res.status(400).json('invalid email or password');

		const token = jwt.sign(
			{ id: user.id, username: user.username, role: user.role },
			'jwtSecret',
			{ expiresIn: 10 }
		);

		return res.json({
			status: 'success',
			data: {
				data: user,
				accessToken: token,
			},
		});
	} catch (error) {
		console.log(error);
	}
};
