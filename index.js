const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const writeRouter = require('./routes/writeExcel');
const readRouter = require('./routes/readExcel');

app.use('/writeExcel', writeRouter);
app.use('/readExcel', readRouter);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.listen(5000,  () => {
    console.log( "Server Running at 5000 ");
})