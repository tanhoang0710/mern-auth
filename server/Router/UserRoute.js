const express = require('express');
const { getListUser, postUser } = require('../Controllers/UserController');
const { isAuthentication, isAdmin } = require('../Middleware/AuthMiddleware');

const router = express.Router();

router.get('/user', isAuthentication, getListUser);
router.post('/user/create', isAuthentication, isAdmin, postUser);

module.exports = router;
