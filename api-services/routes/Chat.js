var express = require('express');
var router = express.Router();
var Chat = require("../controller/ChatController");

router.post('/getAllMessages', function(req, res, next) {
    console.log(req.body);
    var data = req.body;
    
  
    Chat.getAllMessages(data.receiver_id,data.sender_id, (rows) => {
          if (!rows || !rows.length) {
              res.json({
                  "status": "failed",
                  "user": null
              })
          } else {
              res.json({
                  rows
              })
          }
      })
  
  });
  
  module.exports = router;