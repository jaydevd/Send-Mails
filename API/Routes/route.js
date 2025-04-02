const express = require('express');
const router = express.Router();
const { GetHome } = require('./../Controllers/EmailController');

router.route('/', GetHome);

export default router;