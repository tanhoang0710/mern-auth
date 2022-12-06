const jwt = require('jsonwebtoken');

exports.isAuthentication = (req, res, next) => {
	try {
		const bearerHeader = req.headers['authorization'];
		const accessToken = bearerHeader.split(' ')[1];

		const decodeJwt = jwt.verify(accessToken, process.env.SECRET_JWT);

		next();
	} catch (error) {
		// gui ma loi client de client biet refresh tokem
		if (error instanceof jwt.TokenExpiredError) {
			return res.status(401).json('Token Expired');
		}
		// logs error
		console.log(error);
		return res.status(400).json('Not auth');
	}
};
