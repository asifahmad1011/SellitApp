var express = require('express');
var Product = require('../controller/ProductController');
var Image = require("../controller/ImageController");
var router = express.Router();
var loginVerification = require('../utility/LoginVerification');
var jwt = require('jsonwebtoken');
var request = require('request');
const image2base64 = require('image-to-base64');


router.get('/:product_name', function (req, res, next) {
  var product_name = req.params.product_name;
  Product.getAllProductsByName(product_name, (rows) => {
    if (!rows) {
      res.json({
        "status": "failed",
        "user": null
      })
    } else {
      res.json({ products: rows });
    }
  });
});

router.get('/id/:id', function (req, res, next) {
  var product_id = req.params.id;
  Product.getProductById(product_id, (rows) => {
    if (!rows) {
      res.json({
        "status": "failed",
        "user": null
      })
    } else {
      res.json({ products: rows });
    }
  });
});

router.get('/', function (req, res, next) {
  Product.getAllProducts((rows) => {
    if (!rows || !rows.length) {
      res.json({
        "status": "failed",
        "product": null
      })
    } else {
      res.json({ products: rows });
    }
  })
});

// router.post('/add',loginVerification.verifyToken, function(req, res, next) {
router.post('/add', function (req, res, next) {
  var data = req.body;
  var images = data.image;
  console.log(images);
  Product.addProduct({
    name: data.name,
    slug: data.slug,
    description: data.description,
    price: data.price,
    seller_id: data.seller_id,
    more_details: data.more_details,
    status: data.status,
    category_id: data.category_id,
    brand_id: data.brand_id,
    product_condition: data.product_condition,
  }, (rows) => {
    if (!rows) {
      res.json({
        "status": "failed",
        "user": null
      })
    } else {
      var imagebase = "";
      images.forEach(function (value) {
          imageBase64 = value.base64;
          console.log("making post to immbb");
          request.post({
            url: 'https://api.imgbb.com/1/upload?key=5c4df642ef55dee4580c09e200375ec0',
            form: { image: imageBase64 }
          },
            function (err, httpResponse, body) {
              var result = JSON.parse(body);
              if(result.data.url != null){
                  var data = {
                    image: result.title,
                    url: result.url,
                    primary_image_id: 0,
                    video: result.url,
                    product_id: data.rows.product_id,
                  }
                  saveImage(data);
                  res.json({
                    "status": "sucessfull"
                  })
              }
            });
      });
    }
  })
});

router.get("/userproduct/:userid", function(req,res, next){
  var user_id = req.params.userid;
  Product.getAllUserProduct(user_id, (rows) => {
    if (!rows) {
      res.json({
        "status": "failed",
        "user": null
      })
    } else {
      res.json({ products: rows });
    }
  });
})


function saveImage(data) {
  Image.createImage({
    image: data.image,
    url: data.url,
    primary_image_id: data.primary_image_id,
    video: data.video,
    product_id: data.product_id,
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
}
module.exports = router;
