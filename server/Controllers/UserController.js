exports.getListUser = (req, res, next) => {
	// 1 get token from client
	const bearerHeader = req.headers['authorization'];
	const accessToken = bearerHeader.split(' ')[1];
};
exports.getOneUser = (req, res, next) => {
	res.send('detail user');
};
