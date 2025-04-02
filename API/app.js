require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./Routes/route');

const app = express();

app.use(express.static('public'));
app.use("/css", express.static("./node_modules/bootstrap/dist/css"));
app.use("/js", express.static("./node_modules/bootstrap/dist/js"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use('/', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started: http://localhost:${PORT}`));