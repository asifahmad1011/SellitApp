var express = require('express');
var router = express.Router();
var Users = require("../controller/UserController");
var jwt = require('jsonwebtoken');
const cryptr = require("../utility/cryptrkey");


router.post('/', function(req, res, next) {
  console.log(req.body);
  var data = req.body;
  var loginKey = data.matrikel_number;
  var password= data.password;
  var token = jwt.sign({ loginKey:loginKey,password:password }, "GDSD");
	Users.getUser(loginKey,password, (rows) => {
		if (!rows || !rows.length) {
			res.json({
				"status": "failed",
				"user": null
			})
		} else {
     var data = JSON.parse(JSON.stringify(rows));
     var encrptedPassword = data[0].password;
     var decryptyPassword = cryptr.cryptr.decrypt(encrptedPassword)
     if(decryptyPassword == password){
			res.json({
				token,
        "status": "sucessfull",
        "user_id": data[0].matrikel_number
			})
     }else{
      res.json({
        "status": "Username or Password does not match",
        "user_id": data[0].matrikel_number
			})
     }

		}
	})

});

module.exports = router;
