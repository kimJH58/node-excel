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

const header_row = [
  {
    value: 'No.',
    fontWeight: 'bold'
  },
  {
    value: 'Name',
    fontWeight: 'bold'
  },
  {
    value: 'Email',
    fontWeight: 'bold'
  },
  {
    value: 'Created_at',
    fontWeight: 'bold'
  }
];

router.post('/write', function(req, res){
  var id = req.body.id;

  var userSql = `SELECT * FROM tbl_user WHERE id=${id};`
  const user = conn.query(userSql);
  const data_row = [
    {
      type: Number,
      value: user[0].id
    },
    {
      type: String,
      value: user[0].name
    },
    {
      type: String,
      value: user[0].email
    },
    {
      type: Date,
      value: user[0].created_at
    }
  ]

  const makeExcel = async()=>{
    if(!fs.existsSync("./excel")){
      fs.mkdirSync("./excel");
    }
    await writeXlsxFile(data, {
      filePath: `./excel/user_${id}.xlsx`
    });
  }
  
})



module.exports = router;