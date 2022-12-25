const express = require('express');
const router = express.Router();
const writeXlsxFile = require('read-excel-file');
const fs = require('fs');
const app = express();

router.get('/read', function(req, res){
  
  writeXlsxFile("./users.xlsx").then((rows) =>{
    let data = [];
    for(let i=0; i<rows.length; i++){
      const rowsData = {
        userId : rows[i][0],
        userName : rows[i][1],
        userEmail : rows[i][2]
      };
      data.push(rowsData);
    }
    const dataList = JSON.stringify(data);
    console.log(dataList);
  })
  
})




module.exports = router;