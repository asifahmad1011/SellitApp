var Product = require('../model/ProductModel');
var Sequelize = require('sequelize');
const Op = Sequelize.Op;
var Image = require("../model/ImageModel");


//TODO : Add Status = 1 to the Where Clause
module.exports.getAllProducts = function (callback) {
  Product.findAll({
    include: {
      model: Image,
      as: "image",
      //where: { primary_image_id: '0' }
    }
  })
    .then(function (related) {
      //console.log(related[0].role.role);
      callback(related);
    })
    .catch(function (err) {
      //console.log(err);
      callback(err);
    });
}

module.exports.getAllProductsByName = function (product_name, callback) {
  Product.findAll({
    where: {
      name: {
        [Op.substring]: product_name
      }
    },
    include: {
      model: Image,
      as: "image",
      //where: { primary_image_id: '0' }
    }
  })
    .then(function (related) {
      //console.log(related[0].role.role);
      callback(related);
    })
    .catch(function (err) {
      //console.log(err);
      callback(err);
    });
}

module.exports.getProductById = function (product_id, callback) {
  Product.findAll({
    where: {
      product_id: product_id
    },
    include: {
      model: Image,
      as: "image"
    }
  })
    .then(function (related) {
      //console.log(related[0].role.role);
      callback(related);
    })
    .catch(function (err) {
      //console.log(err);
      callback(err);
    });
}

module.exports.addProduct = function (product, callback) {
  Product.build(product).save().then((data) => {
    console.log(data.dataValues);
    callback(data.dataValues);
  }).catch((err) => {
    callback(err);
  })
}

module.exports.getAllUserProduct = function (user_id, callback) {
  Product.findAll({
    where: {
      seller_id: user_id
    },
    include: {
      model: Image,
      as: "image"
    },
    order : [
      ['created_date', 'DESC'],
    ]
  })
    .then(function (related) {
      callback(related);
    })
    .catch(function (err) {
      callback(err);
    });
}

module.exports.getMostRecentUserProduct = function (user_id, callback) {
  Product.findAll({
    where: {
      seller_id: user_id
    },
    include: {
      model: Image,
      as: "image"
    },
    limit: 1,
    order : [
      ['created_date', 'DESC'],
    ]
  })
    .then(function (related) {
      callback(related);
    })
    .catch(function (err) {
      callback(err);
    });
}


module.exports.updateProductStatus = function (product_id,status,callback) {
  Product.update({
    status: status
  },{
    where: {
      product_id: product_id
    }
  })
    .then(function (related) {
      //console.log(related[0].role.role);
      callback(related);
    })
    .catch(function (err) {
      //console.log(err);
      callback(err);
    });
}