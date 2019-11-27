var Product = require('../model/ProductModel');
exports.getAll = (req, res, next) => {
	Product.getAllProducts( (rows) => {
		if (!rows || !rows.length) {
			res.json({
				"status": "failed",
				"product": null
			})
		} else {
			console.log(rows)
			
		}
	})
};
exports.getOne = (req, res, next) => {
	var product_name = req.query.product_name;
	Product.getAllProductsByName(product_name, (rows) => {
		if (!rows || !rows.length) {
			res.json({
				"status": "failed",
				"user": null
			})
		} else {
			res.render('',{products:rows[0]}) 
			
		}
	})
};