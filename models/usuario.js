import mongoose from "mongoose";

const usuarioShema = new mongoose.Schema (
    {
        nameuser: {
            type: String,
            require: true,
            unique: true
        },
        password: {
            type: String,
            require: true
        },
        correo: {
            type: String,
            require: true,
            unique: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
export const usuario = mongoose.model('user', usuarioShema);
export default usuario;