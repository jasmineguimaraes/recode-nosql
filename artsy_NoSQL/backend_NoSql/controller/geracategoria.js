const { query } = require('express');
var mongoUtil = require( '../mongoUtil' );
var db = mongoUtil.getDb();

exports.geraCat = (req, res) => {
    //let sql = "SELECT DISTINCT categoria from produtos";
   db.collection('produtos').distinct("categoria", {},(function (err, result) {
        if (err) throw err;
        //console.log(result);
        return res.status(200).json({query:result})
      }));
    //console.log(result)
}