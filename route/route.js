import express from "express";
import {c_uri} from '../conectarbd.js';
import { regusuario, showuser, showoneuser, updateoneuser} from '../controllers/usercontroller.js';
export const router = express.Router();
//app.use(router)

router.get('/',function(req,res){
    res.send('Bienvenidos a NodeJs desde la Raiz');
    console.log("Connectedd to ", db.connection.name);
})

router.get('/login',(req,res)=>{
    res.send('😁 Bienvenidos a Mi Modulo de Login 😎');
})

// Rutas del Usuario
router.post('/reguser', regusuario); //Registrar Usuario
router.get('/showuser', showuser); //Mostrar Usuarios
router.get('/showuser/:id', showoneuser); //Mostrar un Usuario
router.put('updateoneuser/:id', updateoneuser); //Actualizar Usuario




router.post('/agregar',(req,res)=>{
    res.send('Archivo grabado con Exito 😀');
})

router.delete('/delete',(req,res)=>{
    res.send('Archivo Eliminado con Exito 😉');
})

export default router;