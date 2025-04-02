/**
 * @name Constants
 * @file constants.js
 * @throwsF
 * @description This file will contain all constants used across the API.
 * @author Jaydev Dwivedi (Zignuts)
 */

const { default: hbs } = require('nodemailer-express-handlebars');
const nodemailer = require('nodemailer');
const { HTTP_STATUS_CODES } = require('./../Config/constants');
const path = require('path');
const exphbs = require('express-handlebars');

const GetHome = (req, res) => {
    res.render('index');
}

const SendMail = async (req, res) => {
    try {

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'jaydevd@zignuts.com',
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        transporter.use(
            'compile',
            hbs({
                viewEngine: exphbs.create({ // Use `.create()` for v5
                    extname: '.hbs',
                    layoutsDir: path.resolve(__dirname, 'templates'),
                    defaultLayout: false,
                    partialsDir: path.resolve(__dirname, 'templates', 'partials'),
                }),
                viewPath: path.resolve(__dirname, '../templates/'),
                extName: '.hbs',
            })
        );

        const mailOptions = {
            from: 'jaydevd@zignuts.com',
            to: 'jaydevdwd@gmail.com',
            subject: 'Test Email',
            template: 'index'
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Error:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        await transporter.sendMail();

        return res.status(200).json({
            status: HTTP_STATUS_CODES.SUCCESS,
            message: '',
            data: '',
            error: ''
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
            message: '',
            data: '',
            error: error.message
        })
    }
}

module.exports = { GetHome, SendMail }