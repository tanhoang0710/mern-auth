const express = require('express');
const { getListUser } = require('../Controllers/UserController');

const router = express.Router();

router.get('/user', getListUser);

module.exports = router;
