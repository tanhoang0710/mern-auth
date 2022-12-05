const jwt = require('jsonwebtoken');
const UserModel = require('../Models/UserModel');

exports.getListUser = async (req, res, next) => {
	// 1 get token from client
	const bearerHeader = req.headers['authorization'];
	const accessToken = bearerHeader.split(' ')[1];

	try {
		// 2. verify token
		const decodeJwt = jwt.verify(accessToken, process.env.SECRET_JWT);
		if (decodeJwt) {
			const users = await UserModel.find().select('-password');

			res.status(200).json({
				status: 'success',
				data: {
					users,
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
exports.getOneUser = (req, res, next) => {
	res.send('detail user');
};
