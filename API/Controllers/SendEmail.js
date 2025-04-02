const nodemailer = require('nodemailer');
const cron = require('node-cron');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const transporter = nodemailer.createTransport({
    service: 'your_email_service_provider', // e.g., 'Gmail'
    auth: {
        user: 'your_email_address',
        pass: 'your_email_password',
    },
});

const mailOptions = {
    from: 'sender@example.com',
    to: 'recipient@example.com',
    subject: 'Test Email',
    text: 'This is a test email sent from Node.js.',
    attachments: [
        {
            filename: fileName,
            path: fileName,
        },
    ],
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});

cron.schedule('0 9 * * *', () => {
    sendEmail();
});

const csvWriter = createCsvWriter({
    path: fileName, //For ex: 'data.csv'
    header: [
        { id: "name", title: "Name" },
        { id: "timestamp", title: "Timestamp" },
        { id: "precipitation", title: "Precipitation" },
        { id: "temperature", title: "Temperature" },
        { id: "precipitation", title: "Precipitation" },
        { id: "pressure", title: "Pressure" },
        { id: "humidity", title: "Humidity" },
        { id: "solar_irradiance", title: "Solar_Irradiance" },
    ],
});

if (!data) {
    csvData.push({
        name: user.name,
        timestamp: "None",
        temperature: "None",
        precipitation: "None",
        pressure: "None",
        humidity: "None",
        solar_irradiance: "None",
    });
}
else {
    for (const data of userDataResult) {
        // Add each data entry to csvData array
        csvData.push({
            name: user.name,
            timestamp: data.timestamp,
            temperature: data.temperature,
            precipitation: data.precipitation,
            pressure: data.pressure,
            humidity: data.humidity,
            solar_irradiance: data.solar_irradiance,
        });
    }
}

await csvWriter.writeRecords(csvData);