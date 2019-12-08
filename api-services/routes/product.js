var express = require('express');
var Product = require('../model/product');
var router = express.Router();
var loginVerification = require('./loginVerification');
var jwt = require('jsonwebtoken');


/* GET users listing. */
/*router.post('/:product_name', function(req, res, next) {
  var product_name = req.params.product_name;
	Product.getAllProductsByName(product_name, (rows) => {
		if (!rows || !rows.length) {
			res.json({
				"status": "failed",
				"user": null
			})
		} else {
      res.json({products: rows});
		}
	});
});*/

router.get('/:product_name', function(req, res, next) {
  var product_name = req.params.product_name;
	Product.getAllProductsByName(product_name, (rows) => {
		if (!rows) {
			res.json({
				"status": "failed",
				"user": null
			})
		} else {
      res.json({products: rows});
		}
	});
});
router.post('/product_info', function(req, res, next) {
	var product_id =req.body.product_id;
	  Product.getProductById(product_id, (rows) => {
		  if (!rows) {
			  res.json({
				  "status": "failed",
				  "user": null
			  })
		  } else {
		res.json({products: rows});
		  }
	  });
  });

router.get('/', function(req, res, next) {
  Product.getAllProducts( (rows) => {
		if (!rows || !rows.length) {
			res.json({
				"status": "failed",
				"product": null
			})
		} else {
      res.json({products: rows});
		}
	})
});

router.post('/add',loginVerification.verifyToken, function(req, res, next) {
	var data = req.body;

	jwt.verify(req.token, 'GDSD', (err, authData) => {
		if(err) {
		  res.sendStatus(403);
		} else {
		  
/////Adding Product
Product.addProduct({
	name :data.name,
	slug : data.slug,
	description : data.description,
	price : data.price,
	seller_id : data.seller_id,
	more_details : data.more_details,
	status : data.status,
	category_id : data.category_id,
	brand_id : data.brand_id,
	product_condition : data.product_condition,
	created_date : data.created_date,
	modified_date : data.modified_date
	
}, (rows) => {
if (!rows) {
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
////////


		}
	  });

  
	
  
  });


module.exports = router;
