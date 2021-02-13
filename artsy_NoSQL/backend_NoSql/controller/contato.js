var mongoUtil = require( '../mongoUtil' );
var db = mongoUtil.getDb();

exports.setContato = (req, res) => {
    //console.log(req.query["nome"])
    let nome = req.query["nome"];
    let email = req.query["email"];
    let msg = req.query["msg"];
    result = db.collection('atendimento').insertOne({
        "nomecompleto": nome,
        "email": email,
        "mensagem": msg
    })
    //let sql = "insert into atendimento (nomecompleto, email, mensagem) values(?, ?, ?)";
    //result = db.query(sql, [nome, email, msg])
    if (result){
        return res.status(200).json({message:"Contato adicionado com Sucesso!!"})
    } else{
        return res.status(500).json({message:"Tivemos algum problema ao enviar sua mensagem, tente novamente mais tarde"})
    }

}   