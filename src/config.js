
import dotenv from 'dotenv';
dotenv.config();

//cluster0.ybjvp.mongodb.net
const uri = process.env.MONGO_URI
console.log(uri)
//'mongodb://localhost:27017/serviceAutoDB'

export default {
    mongoURI: uri,
    secretKey: 'clave_secreta_para_jsonwebtoken'
};