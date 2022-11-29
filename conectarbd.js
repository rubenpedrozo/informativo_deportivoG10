import mongoose from 'mongoose';


export const c_uri = 'mongodb+srv://randylove11:Randylove1988@cluster0.wehstoy.mongodb.net/mongevento?retryWrites=true&w=majority';

try {
    const db = await mongoose.connect(c_uri);
    console.log("Se ha conectado con exito a: ", db.connection.name);
}   catch (error) {
    console.error(error);
}
export default c_uri;