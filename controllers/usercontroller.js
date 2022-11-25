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
export const showuser = (req,res) => {

    usuario
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
}

//Mostrar un Usuario
export const showoneuser = (req,res) => {
    const { id } = req.params;
    usuario
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

//Eliminar usuario
export const deluser = (req, res) => {
    const { id } = req.params;
    usuario
    .deleteOne({ _id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
};


//Actualizar Usuario
export const upuser = (req, res) => {
    const { id } = req.params;
    const { nameuser, password, correo } = req.body;
    usuario
    .updateOne({ _id: id }, { $set: {nameuser, password, correo } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};