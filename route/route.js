import express from "express";
import {c_uri} from '../conectarbd.js';
import { regusuario, showuser, showoneuser, deluser, upuser} from '../controllers/usercontroller.js';
import { regevento } from '../controllers/eventocontrollers.js'
export const router = express.Router();
//app.use(router)

router.get('/',function(req,res){
    res.send('Bienvenidos a NodeJs desde la Raiz');
    console.log("Connectedd to ", db.connection.name);
})

router.get('/login',(req,res)=>{
    res.send('😁 Bienvenidos a Mi Modulo de Login 😎');
})

//Rutas para mis eventos deportivos
router.post('/regevento', regevento)


// Rutas del Usuario
router.post('/reguser', regusuario); //Registrar Usuario
router.get('/showuser', showuser); //Mostrar Usuarios
router.get('/showuser/:id', showoneuser); //Mostrar un Usuario
router.delete('/deluser/:id', deluser); //Eliminar Usuario
router.put('/upuser/:id', upuser); //Actualizar Usuario
//router.put('/upuser/:id', upuser); 




router.post('/agregar',(req,res)=>{
    res.send('Archivo grabado con Exito 😀');
})

router.delete('/delete',(req,res)=>{
    res.send('Archivo Eliminado con Exito 😉');
})

export default router;