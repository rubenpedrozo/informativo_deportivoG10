import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const db = mongoose.connect(process.env.MON_DBURI).then(()=> {
    console.log(" La conexion fue realizada con exito a la db: ")
}).catch((error) => console.error("Problemas al conectar a la Base de datos de Mongodb", error));


export default db;