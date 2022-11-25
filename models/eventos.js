import mongoose from "mongoose";
const eventosShema = new mongoose.Schema({
    fecha: {
        type: Date,
        require: true
    },
    equipo1: {
        type: String,
        require: true
    },
    equipo2: {
        type: String,
        require: true
    },
    marcador1: {
        type: Number,
    },
    marcador2: {
        type: Number
    },
    tipoevento: {
        type: String,
        require: true
    }
});

export const evento = mongoose.model('ceventos', eventosShema)
export default evento;
//export default mongoose.model("ceventos",eventosShema);
