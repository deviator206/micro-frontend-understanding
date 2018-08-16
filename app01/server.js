const express = require('express');
const app = express();
var path = require('path');

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3002, () => {
    console.log('server started on 3002');
});