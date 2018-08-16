const express = require('express');
const app = express();
app.get('/',(req, res) => {
   res.send('Hello Express-1');
});

app.listen(3000, () => {
    console.log('server started on 3000');
});