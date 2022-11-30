const mongoose = require('mongoose');

const connectDatabase = async () => {
	try {
		await mongoose.connect('mongodb://localhost:27017/mern_auth');
		console.log('connect database success');
	} catch (error) {
		console.log('connect database fail', error);
	}
};
module.exports = connectDatabase;
