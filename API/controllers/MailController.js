/**
 * @name Constants
 * @file constants.js
 * @throwsF
 * @description This file will contain all constants used across the API.
 * @author Jaydev Dwivedi (Zignuts)
 */

const nodemailer = require('nodemailer');
const { HTTP_STATUS_CODES } = require('./../config/constants');
const { startCronJobs } = require('./../cron');

const SendMail = async () => {
    try {

        startCronJobs(transporter);

        return res.status(200).json({
            status: HTTP_STATUS_CODES.SUCCESS,
            message: 'Mail sent successfully',
            data: '',
            error: ''
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
            message: 'Internal Server Error',
            data: '',
            error: error.message
        })
    }
}

module.exports = { SendMail }