const cron = require('node-cron');
const { mailService } = require('../services/mailService');

const mailJob = cron.schedule('0 * * * *', () => {
    console.log('Running Job 1 every hour');
    mailService();
});

module.exports = { mailJob };