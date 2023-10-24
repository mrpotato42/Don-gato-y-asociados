const { Router } = require('express')
const router = Router();
const {getCategories, postNewUsers, getExistCorreo,getExistUser } = require ('../controllers/controllers.js')

//peticiones registro
//busca si correo que se le da ya existe en la base de datos
router.get('/existCorreo/:email',getExistCorreo)

//peticiones login
router.get('/loginUser/:username',getExistUser)

router.get('/',(req,res)=>{
    res.send('hola gato')
})
//ingresa un nuevo usuario a la base de datos
router.post('/newuser',postNewUsers)




module.exports = router;


