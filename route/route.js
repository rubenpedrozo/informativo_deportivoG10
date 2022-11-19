import express from "express";
import {URI} from '../conectarbd.js'
import {regusuario} from '../controllers/usercontroller.js'
export const router = express.Router();

//import { MONGODB_URI } from '../db.js'
//app.use(router)



router.get('/',function(req,res){
    res.send('Bienvenidos a NodeJs desde la Raiz');
    console.log("Connected to ",db.connection.name);
})

router.get('/login',(req,res)=>{
    res.send('😁 Bienvenidos a Mi Modulo de Login 😎');
})

//Ruta del Usuario
router.post('/reguser',regusuario);

router.post('/agregar',(req,res)=>{
    res.send('Archivo grabado con Exito 😀');
})

router.delete('/delete',(req,res)=>{
    res.send('Archivo Eliminado con Exito 😉');
})

export default router;