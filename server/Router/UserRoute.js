const express = require('express');
const {
	getListUser,
	postUser,
	deleteUser,
} = require('../Controllers/UserController');
const { isAuthentication, isAdmin } = require('../Middleware/AuthMiddleware');

const router = express.Router();

router.get('/user', isAuthentication, getListUser);
router.post('/user/create', isAuthentication, isAdmin, postUser);
router.delete('/user/delete/:userId', isAuthentication, isAdmin, deleteUser);

module.exports = router;
