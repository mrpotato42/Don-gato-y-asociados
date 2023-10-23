const { Router } = require('express')
const router = Router();
const {getCategories, postNewUsers, getExistCorreo } = require ('../controllers/controllers.js')

//pide todas las categorias en la bd
router.get('/categorias',getCategories)
//busca si correo que se le da ya existe en la base de datos
router.get('/existCorreo/:email',getExistCorreo)
router.get('/',(req,res)=>{
    res.send('hola gato')
})
//ingresa un nuevo usuario a la base de datos
router.post('/newuser',postNewUsers)




module.exports = router;


