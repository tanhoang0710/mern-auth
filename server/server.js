const express = require('express');
const connectDatabase = require('./Services/ConnectDbService');
const userRouter = require('./Router/UserRoute');
const authRouter = require('./Router/AuthRoute');
const cors = require('cors');

const app = express();
const PORT = 5000;

// middleware apply cors
app.use(cors());

// connect database
connectDatabase();

// middleware roter
app.use('/users', userRouter);
app.use('/api/auth', authRouter);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
