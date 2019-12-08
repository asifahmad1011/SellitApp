/*user model*/
var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');
const Op = Sequelize.Op;

var Product = sequelize.define('products', {
	product_id: {
		type: Sequelize.BIGINT(5),
		autoIncrement: true,
		primaryKey: true,
		unique: true,
		allowNull: false
	},
	name: {
		type: Sequelize.STRING(45),
		allowNull: false
	},
	 slug: {
		 type: Sequelize.STRING(20),
		 allowNull: false
	 },
	description: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	price: {
		type: Sequelize.STRING(20),
		allowNull: false
	},
	//  img_id: {
	//  	type: Sequelize.BIGINT(11)
	//  },
	// image: {
	// 	type: Sequelize.STRING(1000)
	// },
	 seller_id: {
		 type: Sequelize.BIGINT(11),
		 allowNull: false
	 }
	 ,
	 more_details: {
	 	type: Sequelize.TEXT
	 },
	 status: {
		 type: Sequelize.BIGINT(11),
		 allowNull: false
	 }
	 ,
	 category_id: {
		 type: Sequelize.BIGINT(11),
		 allowNull: false
	 },
	 brand_id: {
		type: Sequelize.BIGINT(11),
		allowNull: false
	},
	  product_condition: {
	  	type: Sequelize.BIGINT(11)
	  },
	  created_date: {
	 	type: Sequelize.DATE
	 },
	 modified_date: {
	 	type: Sequelize.DATE
	 },
	

});

module.exports.getAllProducts = function(callback) {
        Product.findAll()
		.then(function(related) {
			//console.log(related[0].role.role);
			callback( related);
		  })
		  .catch(function(err) {
			//console.log(err);
			callback(err);
		  });
	}

module.exports.getAllProductsByName = function(product_name,callback) {
        Product.findAll({
			where: {
        	name:{
				[Op.substring]:product_name
			}
				 	}
		  })
		.then(function(related) {
			//console.log(related[0].role.role);
			callback( related);
		  })
		  .catch(function(err) {
			//console.log(err);
			callback(err);
		  });
  }
  module.exports.getProductById = function(product_id,callback) {
	Product.findAll({
		where: {
			product_id:product_id
				 }
	  })
	.then(function(related) {
		//console.log(related[0].role.role);
		callback( related);
	  })
	  .catch(function(err) {
		//console.log(err);
		callback(err);
	  });
}


  module.exports.addProduct = function(product,callback){

	Product.build(product).save().then((data) => {
		console.log(data.dataValues);
		callback(data.dataValues);
	}).catch((err) => {
		callback(err);
	})
  }
  
