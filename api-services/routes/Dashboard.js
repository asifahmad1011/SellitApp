var express = require('express');
var router = express.Router();
var Dash = require("../controller/DashboardController");

router.get('/', function(req, res, next) {
        var totalProductt = 0;
        Dash.totalProduct((rows) => {
            if (!rows) {
              console.log(rows);
                res.json({
                    "status": "failed",
                    "cahat": null
                })
            } else {
             // console.log(rows);
              totalProductt = rows;
              //getDashboardResult();
            }
        });
        console.log(39);
        res.json({totalProductt});
    });

    function getDashboardResult(){
      var totalProduct = Dash.totalProduct((rows) => { rows});
      console.log(totalProduct + "from getDashboardResult");
    }


  module.exports = router;
