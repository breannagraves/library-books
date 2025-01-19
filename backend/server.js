const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const cors = require('cors');
const routes = require('./bookRoutes');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(routes);

app.listen(3002, () => {
  console.log('Server started on port 3002');
});

