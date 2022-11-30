const express = require('express');
const connectDatabase = require('./Services/ConnectDbService');
const userRouter = require('./Router/UserRoute');

const app = express();
const PORT = 5000;

// connect database
connectDatabase();

// middleware roter
app.use('/users', userRouter);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
