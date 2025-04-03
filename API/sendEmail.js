/**
 * @name Constants
 * @file constants.js
 * @throwsF
 * @description This file will contain all constants used across the API.
 * @author Jaydev Dwivedi (Zignuts)
 */

const { default: hbs } = require('nodemailer-express-handlebars');
const nodemailer = require('nodemailer');
const { HTTP_STATUS_CODES } = require('./config/constants');
const path = require('path');
const exphbs = require('express-handlebars');
const cron = require('node-cron');

const SendMail = async () => {
    try {

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'jaydevdwd@gmail.com',
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        transporter.use(
            'compile',
            hbs({
                viewEngine: exphbs.create({
                    extname: '.hbs',
                    layoutsDir: path.resolve(__dirname, 'templates'),
                    defaultLayout: false,
                    partialsDir: path.resolve(__dirname, 'templates', 'partials'),
                }),
                viewPath: path.resolve(__dirname, '../templates'),
                extName: '.hbs',
            })
        );

        const mailOptions = {
            from: 'jaydevdwd@gmail.com',
            to: 'jaydevd@zignuts.com',
            subject: 'Test Email',
            template: 'index'
        };

        cron.schedule('0 15 * * *', () => {

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log('Error:', error);
                } else {
                    console.log('Email sent:', info.response);
                }
            });
        });
        return;

    } catch (error) {
        console.log("Error from sendMail: ", error);
    }
}

module.exports = { SendMail }