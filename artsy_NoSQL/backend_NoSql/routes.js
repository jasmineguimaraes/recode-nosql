let express = require('express');
let router = express.Router();

const contato = require('./controller/contato.js');
const customer = require('./controller/customer.js')
const categoria = require('./controller/geracategoria.js')
const produtos = require('./controller/listproducts.js')
const estoque = require('./controller/geraestoque.js')

router.post('/api/contato', contato.setContato);
router.get('/api/customer', customer.getCustomer);
router.get('/api/geracat', categoria.geraCat);
router.get('/api/listprod', produtos.listProd);
router.post('/api/getprod', produtos.getProd);
router.get('/api/listest', estoque.listEst);


module.exports = router;