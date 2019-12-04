var express = require('express');
var Product = require('../model/product');
var router = express.Router();

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

module.exports = router;
