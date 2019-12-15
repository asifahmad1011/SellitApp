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


router.post('/admin', function(req, res, next) {
  var sessionStorage = require('sessionstorage');
  console.log(req.body);
  var data = req.body;
  var loginKey = data.matrikel_number;
  var password= data.password;

	Users.getUser(loginKey,password, (rows) => {
		if (!rows || !rows.length) {
			res.render("admin/login.ejs",{
        "status": "failed",
        "user_id": null
      })
		} else {
     var data = JSON.parse(JSON.stringify(rows));
     if(data[0].role_id==1){
      sessionStorage.setItem("status","sucessfull");
      // req.session.matrik_num = data[0].matrikel_number;
			res.render("admin/index.ejs",{
        "status": "sucessfull",
        "user_id": data[0].matrikel_number
      })}
      else
      res.render("admin/login.ejs",{
        "status": "failed",
        "user_id": null
      })
		}
	})

});

module.exports = router;
