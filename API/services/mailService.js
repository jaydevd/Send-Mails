const { mailOptions } = require("../config/mailOptions");
const transporter = require("../config/transporter");

const mailService = () => {
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

module.exports = { mailService };