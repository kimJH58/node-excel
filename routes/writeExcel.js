const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mysql = require('sync-mysql');
const writeXlsxFile = require('write-excel-file');
const fs = require('fs');
const app = express();

require('dotenv').config();

var conn = new mysql ({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  multipleStatements: true,
  dateStrings: "date"
});



module.exports = router;