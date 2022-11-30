import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

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
    
    userShema.pre('save', function(next) {
        const user = this
        const salt = bcrypt.genSaltSync(12);
        const hash = bcrypt.hashSync(user.password, salt);
        user.password = hash;
        next()
    
        });

    /*userShema.pre('updateOne', function(next) {
        const user = this
        const salt = bcrypt.genSaltSync(12);
        const hash = bcrypt.hashSync(user.password, salt);
        user.password = hash;
        next()
        
        });*/
            
export const usuario = mongoose.model('user', userShema);
export default usuario;