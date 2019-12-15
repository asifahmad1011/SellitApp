var express = require('express');
var router = express.Router();
var Dash = require("../controller/DashboardController");

router.get('/', function (req, res, next) {
  var totalProduct = 0;
  var totalSoldProduct = 0;
  var totalPendingProduct = 0;
  var totalApprovedProduct = 0;
  var totalInActiveProduct = 0;
  var totalDeletedProduct = 0;
  Dash.totalProduct((rows) => {
    if (!rows) {
      console.log(rows);
      res.json({
        "status": "failed",
        "cahat": null
      })
    } else {
      totalProduct = rows;
      Dash.totalSoldProduct((rows) => {
        totalSoldProduct = rows;
        Dash.totalPendingProduct((rows) => {
          totalPendingProduct = rows;
          Dash.totalApprovedProduct((rows) => {
            totalApprovedProduct = rows;
            Dash.totalInActiveProduct((rows) => {
              totalInActiveProduct = rows;
              Dash.totalDeletedProduct((rows) => {
                totalDeletedProduct = rows;
                res.json({
                  "totalProduct": totalProduct,
                  "totalSoldProduct": totalSoldProduct,
                  "totalPendingProduct": totalPendingProduct,
                  "totalApprovedProduct" : totalApprovedProduct,
                  "totalInActiveProduct" :totalInActiveProduct,
                  "totalDeletedProduct" :  totalDeletedProduct,
                })
              })
            })
          })
        });
      })


    }
  });

});

function getDashboardResult() {
  var totalProduct = Dash.totalProduct((rows) => { rows });
  console.log(totalProduct + "from getDashboardResult");
}


module.exports = router;
