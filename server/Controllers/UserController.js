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
	// 1. vertify token
	// 2. only role admin co the access
	// 3. Save data to user collecion

	const bearerHeader = req.headers['authorization'];
	const accessToken = bearerHeader.split(' ')[1];

	const { username, password, email, role } = req.body;

	try {
		// 2. verify token
		const decodeJwt = jwt.verify(accessToken, process.env.SECRET_JWT);
		if (decodeJwt && decodeJwt.role === 'admin') {
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
		}
	} catch (error) {
		// gui ma loi client de client biet refresh tokem
		if (error instanceof jwt.TokenExpiredError) {
			return res.status(401).json('Token Expired');
		}
		// logs error
		console.log(error);
	}
};
