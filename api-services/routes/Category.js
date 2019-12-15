var express = require('express');
var router = express.Router();
var Category = require("../controller/CategoryController");

router.get('/', function (req, res, next) {
    Category.getAllSubCategories((rows) => {
        if (!rows || !rows.length) {
            res.json({
                "status": "failed",
                "category": null
            })
        } else {
            res.json({ rows });
        }
    })
});

router.get('/categories', function (req, res, next) {
  Category.getAllCategories((rows) => {
      if (!rows || !rows.length) {
          res.json({
              "status": "failed",
              "category": null
          })
      } else {
          res.json({ rows });
      }
  })
});
router.get('/subcategories', function (req, res, next) {
  Category.getAllSubCategories((rows) => {
      if (!rows || !rows.length) {
          res.json({
              "status": "failed",
              "category": null
          })
      } else {
          res.json({ rows });
      }
  })
});

router.get('/:id', function (req, res, next) {
  var category_id = req.params.id;
  Category.getAllCategoryBrands(category_id, (rows) => {
    if (!rows) {
      res.json({
        "status": "failed",
        "user": null
      })
    } else {
      res.json({ category: rows });
    }
  });
});

module.exports = router;
