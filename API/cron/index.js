const mailJob = require('./mailJob');

const startCronJobs = (transporter) => {
    mailJob.start(transporter);
};

module.exports = { startCronJobs };