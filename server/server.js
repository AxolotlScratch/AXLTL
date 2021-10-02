const express = require('express');
const app = express();
const apiRouter = require('./routes/api');

const path = require('path');
const port = process.envPORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//changed '../build' to '../client'
app.use('/', express.static(path.join(__dirname, '../client')));

app.use('/api', apiRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

// start server and log which port is being listened
app.listen(port, () => console.log(`Listening on port 3000`));
