var express = require('express');
var router = express.Router();

router.post('/getProductDetails', function (req, res, next) {
     var data = req.body;
     console.log("req-"+data.product_id);
             res.render('admin/hi.ejs',{products:data});
    console.log("reached");
                console.log("passed");
});

module.exports = router;