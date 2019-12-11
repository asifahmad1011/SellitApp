/*user model*/
var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');
const Op = Sequelize.Op;
var productmodel = require("../model/product");

var Image = sequelize.define('images', {
  image_id: {
    type: Sequelize.BIGINT(5),
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING(45),
    allowNull: false
  },
  url: {
    type: Sequelize.STRING(45),
    allowNull: false
  },
  primary_image_id: {
    type: Sequelize.BIGINT(5),
    allowNull: false
  },
  video: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  product_id: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  created_date: {
    type: Sequelize.DATE
  },
  modified_date: {
    type: Sequelize.DATE
  },


});

//Image.associate = function() {
 //Image.belongsTo(productmodel.Product, {foreignKey: 'product_id', as: 'product'})
//};

module.exports = Image;


