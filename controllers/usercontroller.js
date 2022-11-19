import {usuario} from '../models/usuario.js';

//Registrar Usuario
export const regusuario = (req, res) => {
    const user = usuario(req.body);
    user
        .save()
        .then((data)=>res.json(data))
        .catch((error)=> res.json({message: error}));
};