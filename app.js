require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./API/Routes/route');
const sequelize = require('./API/Config/database');
const path = require('path');
const { SendMail } = require('./API/sendEmail');
const app = express();

sequelize.sync().then(() => {
    console.log("Database synced successfully.");
}).catch((err) => {
    console.error("Error syncing database:", err);
});

app.use(express.static('public'));
app.use("/css", express.static("./node_modules/bootstrap/dist/css"));
app.use("/js", express.static("./node_modules/bootstrap/dist/js"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'hbs');
app.use('/', router);

SendMail();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started: http://localhost:${PORT}`));