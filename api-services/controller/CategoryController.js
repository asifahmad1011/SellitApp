var Category = require('../model/CategoryModel');

 module.exports.getAllCategories = function (callback) {
    Category.findAll({
      where: {
        parent_id: 0
      },
      include: {model: Category, as:"sub_category"}
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
