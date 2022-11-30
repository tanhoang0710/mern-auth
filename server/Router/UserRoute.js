const express = require('express');
const { getListUser, getOneUser } = require('../Controllers/UserController');

const router = express.Router();

router.get('/', getListUser);
router.get('/detail', getOneUser);

module.exports = router;
