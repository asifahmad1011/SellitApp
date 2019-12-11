var express = require('express');
var router = express.Router();
var Chat = require("../controller/ChatController");

router.get('/:matrikel_number', function(req, res, next) {
    var matrikel_number =req.params.matrikel_number;
        Chat.getAllCommunications(matrikel_number, (rows) => {
            if (!rows) {
                res.json({
                    "status": "failed",
                    "cahat": null
                })
            } else {
          res.json({rows});
            }
        });
    });
  
router.post('/getAllMessages', function(req, res, next) {
    console.log(req.body);
    var data = req.body;
    
  
    Chat.getAllMessages(data.receiver_id,data.sender_id, (rows) => {
          if (!rows || !rows.length) {
              res.json({
                  "status": "failed",
                  "message": null
              })
          } else {
              res.json({
                  rows
              })
          }
      })
  
  });
  
  module.exports = router;