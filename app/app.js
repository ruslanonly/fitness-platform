const path = require('path');
// load dependencies
const env = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');

const expressEjsLayouts = require('express-ejs-layouts');

const app = express();

const ApiRouter = require('./routes/v1/index');
const WebRouter = require('./routes/web');

env.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

app.use(expressEjsLayouts)
app.set('layout', path.join(__dirname, '../views/layout/main'))
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(WebRouter);
app.use(ApiRouter);

module.exports = app