import express from "express";
import {c_uri} from '../conectarbd.js';
import { regusuario, showuser, showoneuser, deluser, upuser} from '../controllers/usercontroller.js';
import { regevento, shevento, shonevento, delevento, upevento} from '../controllers/eventocontrollers.js'
export const router = express.Router();


//Rutas para mis eventos deportivos
router.post('/regevento', regevento) // Registrar un evento
router.get('/shevento', shevento); // Mostrar todos los eventos
router.get('/shonevento/:id', shonevento); // Mostrar un evento
router.delete('/delevento/:id', delevento); // Eliminar evento
router.put('/upevento/:id', upevento); // Actualizar evento


// Rutas del Usuario
router.post('/reguser', regusuario); //Registrar Usuario
router.get('/showuser', showuser); //Mostrar Usuarios
router.get('/showuser/:id', showoneuser); //Mostrar un Usuario
router.delete('/showuser/:id', deluser); //Eliminar Usuario
router.put('/upuser/:id', upuser); //Actualizar Usuario


export default router;