var express = require('express');
var Product = require('../model/product');
var router = express.Router();
const uuidv4=require('uuid/v4')

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
	Product.searchProductsByName(product_name, (rows) => {
		if (!rows || !rows.length) {
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

router.post('/add', function(req, res, next) {
	var data = req.body;

	console.log(data);

  
	  Product.addProduct({
		id : data.id,
		product_id:uuidv4(),
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
  
  });


module.exports = router;
