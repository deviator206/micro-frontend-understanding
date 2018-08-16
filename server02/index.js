const express = require('express');
const app = express();
var path = require('path');

app.get('/widget01',(req, res) => {
    res.sendFile(path.join(__dirname + '/bundle.js'));
});

app.listen(3001, () => {
    console.log('server started on 3001');
});