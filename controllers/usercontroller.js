import {usuario} from '../models/usuario.js';

//Registrar Usuario
export const regusuario = (req, res) => {
    const user = usuario(req.body);
    user
        .save()
        .then((data)=>res.json(data))
        .catch((error)=> res.json({message: error}));
};
export const regusuario1 = async (req,res) => {
    res.send("Archivo agregado con exito")
    console.log(req.body)
    await usuario.create({nameuser: req.body.nameuser, password: req.body.password, correo:req.body.correo});
}

//Mostrar Usuarios
export const shuser = (req,res) => {

    usuario
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
}