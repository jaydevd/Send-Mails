/**
 * @name Router
 * @file route.js
 * @throwsF
 * @description This file will contain all routes across the API.
 * @author Jaydev Dwivedi (Zignuts)
 */

const express = require('express');
const router = express.Router();
const { SendMail } = require('./../controllers/MailController');

router.route('/send-mail')
    .get(SendMail);

module.exports = { router };