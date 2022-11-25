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



//Mostrar un Evento



//Eliminar un Evento



//Actualizar evento



export default regevento;