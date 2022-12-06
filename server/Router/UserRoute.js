const express = require('express');
const { getListUser, postUser } = require('../Controllers/UserController');
const { isAuthentication } = require('../Middleware/AuthMiddleware');

const router = express.Router();

router.get('/user', isAuthentication, getListUser);
router.post('/user/create', postUser);

module.exports = router;
