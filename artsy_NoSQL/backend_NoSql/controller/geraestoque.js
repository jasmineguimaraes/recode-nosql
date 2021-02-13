var mongoUtil = require( '../mongoUtil' );
var db = mongoUtil.getDb();

exports.listEst= (req, res) =>{
    //var sql = "SELECT DISTINCT local from estoque";
    db.collection('estoque').distinct('local', {}, (function (err, items) {
        if (err) throw err;
        //console.log(items);
        return res.status(200).json({query:items})
      }));
}