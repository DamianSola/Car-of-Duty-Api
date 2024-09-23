import mongoose from "mongoose";
const {Schema} = mongoose;


const carSchema  = new Schema({
    name: {
        type: String,
        required: [true, "el nombre es obligatorio"]
    },
    type:{
        type: String,
        required: true
    },
    motor:{
        type: String,
        required: true
    },
    brand:{
        type: Schema.Types.ObjectId,    
        ref: 'Brand',
    }
})

const Car = mongoose.model('Car', carSchema)


export default Car;
