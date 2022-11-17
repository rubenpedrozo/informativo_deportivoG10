import express from "express";
export const router = express.Router();
//app.use(router)

router.get('/',function(req,res){
    res.send('Bienvenidos a NodeJs desde la Raiz');
})

router.get('/login',(req,res)=>{
    res.send('😁 Bienvenidos a Mi Modulo de Login 😎');
})

router.post('/agregar',(req,res)=>{
    res.send('Archivo grabado con Exito 😀');
})

router.delete('/delete',(req,res)=>{
    res.send('Archivo Eliminado con Exito 😉');
})

export default router;