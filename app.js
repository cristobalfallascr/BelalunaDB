const express = require('express');
const bodyParser = require('body-parser');

const mongooseDbCon = require('./mongoose');

const app = express();
app.use(bodyParser.json());

app.post ('/pijamas', mongooseDbCon.createItem);

app.listen(3000,()=>{
    console.log("Server is up now");
})