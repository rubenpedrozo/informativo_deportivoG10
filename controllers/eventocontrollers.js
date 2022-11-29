import {evento} from '../models/eventos.js';


//Registrar evento
export const regevento = (req, res) => {
    const ceventos = evento(req.body);
    ceventos
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
};


//Mostrar los Eventos
export const shevento = (req,res) => {
    evento
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
};


//Mostrar un Evento
export const shonevento = (req, res) => {
    const { id } = req.params;
    evento
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
};


//Eliminar un Evento
export const delevento = (req, res) => {
    const { id } = req.params;
    evento
    .deleteOne({ _id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};


//Actualizar evento
export const upevento = (req, res) => {
    const { id } = req.params;
    const { fecha, equipo1, equipo2, marcador1, marcador2, tipoevento } = req.body;
    evento
    .updateOne({ _id: id }, { $set: {fecha, equipo1, equipo2, marcador1, marcador2, tipoevento } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};


export default regevento;