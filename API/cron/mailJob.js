const cron = require('node-cron');
const { mailService } = require('../services/mailService');

const mailJob = cron.schedule('* * * * *', () => {
    mailService();
});

module.exports = mailJob;