const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "../client/dist")));


let port = 3000;
app.listen(port)
console.log(`listening at localhost:${port}`)