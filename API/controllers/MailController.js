/**
 * @name Constants
 * @file constants.js
 * @throwsF
 * @description This file will contain all constants used across the API.
 * @author Jaydev Dwivedi (Zignuts)
 */

const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const { HTTP_STATUS_CODES } = require('./../config/constants');
const path = require('path');
const cron = require('node-cron');
const { mailOptions } = require('./../config/mailOptions');
const { startCronJobs } = require('./../cron');

const SendMail = async () => {
    try {

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'jaydevdwd@gmail.com',
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const handlebarOptions = {
            viewEngine: {
                extname: '.hbs',
                partialsDir: path.resolve('./templates/partials'),
                layoutsDir: path.resolve('./templates'),
                defaultLayout: false,
            },
            viewPath: path.resolve('./templates'),
            extName: '.hbs',
        };

        transporter.use('compile', hbs(handlebarOptions));

        startCronJobs();

        return;

    } catch (error) {
        console.log(error);
    }
}

module.exports = { SendMail }