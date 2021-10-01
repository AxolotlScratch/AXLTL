const express = require('express');
const app = express();
const path = require('path');
const port = process.envPORT || 3000;

app.use('/', express.static(path.join(__dirname, '../build')));

app.listen(port, () => console.log(`Listening on port 3000`));