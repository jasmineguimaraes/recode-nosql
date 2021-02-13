var mongoUtil = require( '../mongoUtil' );
var db = mongoUtil.getDb();

exports.listProd= (req, res) =>{
    //var sql = "SELECT * FROM produtos";
    db.collection('produtos').find({}).toArray(function (err, items) {
        if (err) throw err;
        //console.log(JSON.parse(JSON.stringify(items)));
        return res.status(200).json({query:JSON.parse(JSON.stringify(items))})
      });
}

exports.getProd= (req, res) =>{
    let cat = req.query["cat"];
    let est = req.query["est"];
    if ((cat == "") && (est == "")) {
        db.collection('produtos').find({}).toArray(function (err, items) {
            if (err) throw err;
            //console.log(JSON.parse(JSON.stringify(result)));
            return res.status(200).json({query:JSON.parse(JSON.stringify(items))})
          });
    } else if (est == ""){
        db.collection('produtos').find({categoria: cat}).toArray(function (err, items) {
            if (err) throw err;
            //console.log(JSON.parse(JSON.stringify(result)));
            return res.status(200).json({query:JSON.parse(JSON.stringify(items))})
          });
    } else if (cat == ""){
        db.collection('produtos').find({}).toArray(function (err, items) {
            if (err) throw err;
            db.collection('estoque').find({local: est}).toArray(function (err, itemsEst) {
                if (err) throw err;
                //console.log(JSON.parse(JSON.stringify(itemsEst)));
                var resultado =[]
                for (var produto in items){
                    //console.log(items[produto])
                    for (var estoque in itemsEst){
                        //console.log(itemsEst[estoque])
                        if ((items[produto].idproduto == itemsEst[estoque].idproduto) && (itemsEst[estoque].quantidade > 0)){
                            resultado.push(items[produto])
                        }
                    }
                }
                //console.log(resultado)
                return res.status(200).json({query:JSON.parse(JSON.stringify(resultado))})
            })
        });
    } else {
        sql = "SELECT * FROM produtos as p JOIN estoque as e ON e.local= ? and p.idproduto=e.idproduto WHERE categoria = ?";
        db.collection('produtos').find({}).toArray(function (err, items) {
            if (err) throw err;
            db.collection('estoque').find({local: est}).toArray(function (err, itemsEst) {
                if (err) throw err;
                //console.log(JSON.parse(JSON.stringify(itemsEst)));
                var resultado =[]
                for (var produto in items){
                    //console.log(items[produto])
                    for (var estoque in itemsEst){
                        //console.log(itemsEst[estoque])
                        if ((items[produto].idproduto == itemsEst[estoque].idproduto) && (itemsEst[estoque].quantidade > 0)){
                            if (items[produto].categoria == cat){
                                resultado.push(items[produto])
                            }
                        }
                    }
                }
                //console.log(resultado)
                return res.status(200).json({query:JSON.parse(JSON.stringify(resultado))})
            })
        });
    }
}
