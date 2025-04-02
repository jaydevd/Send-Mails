/**
 * @name Router
 * @file route.js
 * @throwsF
 * @description This file will contain all routes across the API.
 * @author Jaydev Dwivedi (Zignuts)
 */

const express = require('express');
const router = express.Router();
const { GetHome, SendMail } = require('../sendEmail');

router.get('/', SendMail);

module.exports = router;