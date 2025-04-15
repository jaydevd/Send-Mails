require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { router } = require('./api/routes/index');
const sequelize = require('./API/Config/database');
const path = require('path');
const app = express();

sequelize.sync().then(() => {
    console.log("Database synced successfully.");
}).catch((err) => {
    console.error("Error syncing database:", err);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started: http://localhost:${PORT}`));