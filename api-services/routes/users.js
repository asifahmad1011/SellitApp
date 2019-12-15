var express = require('express');
var router = express.Router();
var Users = require("../controller/UserController");
var utili = require("../utility/utility");
var Product = require("../controller/ProductController");

/* GET users listing. */
router.get('/', function(req, res, next) {
    Users.getAllUser((result) => {
      if(utili.isEmpty(result)){
        res.json({
          status : "No Record Found",
          user : null
        });
      }else{
        res.json({users : result});
      }

    })
});

router.post("/", function(req,res,next){
  const data = req.body;
  console.log(data);
  Users.createUser(
        {
        matrikel_number : data.matrikel_number,
        first_name : data.first_name,
        last_name : data.last_name,
        dob : data.dob,
        email : data.email,
        address : data.address,
        phone_number : data.phone_number,
        role_id : data.role_id,
        username : data.username,
        password : data.password,
        postal_code : data.postal_code,
        created_date : data.created_date,
        modified_date : data.modified_date
  }, (result) => {
    if(utili.isEmpty(result)){
      return res.send({
        status : "success",
      })
    }else{
     // console.log(result.original);
      return res.send({
        status : "failed",
        reason : result.original.sqlMessage,
      })
    }
  })
})

router.get("/product/:userid", function(req,res, next){
  var user_id = req.params.userid;
  Product.getAllUserProduct(user_id, (rows) => {
    if (!rows) {
      res.json({
        "status": "failed",
        "user": null
      })
    } else {
      res.json({ products: rows });
    }
  });
})


module.exports = router;


