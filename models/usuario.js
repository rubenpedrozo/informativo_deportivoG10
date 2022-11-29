import mongoose from "mongoose";

const userShema = new mongoose.Schema (
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
    

export const usuario = mongoose.model('user', userShema);
export default usuario;