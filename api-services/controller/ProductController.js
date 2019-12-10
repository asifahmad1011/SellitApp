var model = require('../model/product');
var Image = require("../model/image");

module.exports.getAllProducts = function (callback) {
  console.log(model);
  model.findAll({
    include: { model: Image, as: "image" }
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
