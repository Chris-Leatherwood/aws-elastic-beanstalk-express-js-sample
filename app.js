const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is my updated text for validating the review stage on the pipeline'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
