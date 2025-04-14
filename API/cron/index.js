const mailJob = require('./mailJob');

const startCronJobs = () => {
    mailJob.start();
};

module.exports = { startCronJobs };