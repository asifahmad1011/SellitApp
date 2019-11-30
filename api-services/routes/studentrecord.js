var express = require('express');
//const app = express();
var student = require('../model/studentarchive');
var utili = require("../utility/utility");
var router = express.Router();

router.get("/:id", function(req,res, next){
  var matric_no = req.params.id;
  student.getStudentRecordByID(matric_no, (result) => {
    if(utili.isEmpty(result.dataValues)){
      res.json({
        "status" : "failed",
        "user" : null
      });
    }else{
      res.json({student : result});
    }
  })
})

module.exports = router;
