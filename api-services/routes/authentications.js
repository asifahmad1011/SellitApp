var express = require('express');
var router = express.Router();
var Users = require("../model/user");
var utili = require("../utility/utility");


router.post('/', function(req, res, next) {
  console.log(req.body);
  var data = req.body;
  var loginKey = data.matrikel_number;
  var password= data.password;
  /*if(req.query.username)
  loginKey=req.query.username;
  else if(req.query.matrikel_number)
  loginKey=req.query.matrikel_number;*/

	Users.getUser(loginKey,password, (rows) => {
		if (!rows || !rows.length) {
			res.json({
				"status": "failed",
				"user": null
			})
		} else {
			res.json({
				"status": "sucessfull"
			})
		}
	})

});

module.exports = router;
