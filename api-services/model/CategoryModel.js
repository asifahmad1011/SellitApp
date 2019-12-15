var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');
var Brand = require('../model/BrandModel');

var Category = sequelize.define("category",{
    category_id : {
      type: Sequelize.BIGINT(11),
      autoIncrement: true,
      allowNull : false,
      primaryKey : true
    },
    parent_id : {
      type: Sequelize.BIGINT(11)
    },
    name : {
      type: Sequelize.STRING(20),
      allowNull : false,
    },
    description : {
        type: Sequelize.TEXT,
        allowNull : false,
      },
    created_date : {
      type: Sequelize.DATE,
      allowNull : false,
    },
    modified_date : {
      type: Sequelize.DATE,
      allowNull : false,
    },
  }
)
Category.hasMany(Category, {foreignKey: "parent_id", as : "sub_category"});
Category.hasMany(Brand, {foreignKey: "category_id", as : "brands"});
module.exports=Category;

