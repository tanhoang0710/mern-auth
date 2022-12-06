const express = require('express');
const { getListUser, postUser } = require('../Controllers/UserController');

const router = express.Router();

router.get('/user', getListUser);
router.post('/user/create', postUser);

module.exports = router;
