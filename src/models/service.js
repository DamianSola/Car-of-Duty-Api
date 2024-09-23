import mongoose from "mongoose";
const {Schema} = mongoose;

const serviceSchema  = new Schema({
    name: {
        type: String, 
        required: true
    },
    service: {
        type: Schema.Types.ObjectId,
        ref: 'ServiceType',
   },
    price: {
        type: Schema.Types.Decimal128,
        required: [true, "el precio es obligatorio"]
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
    },
    car:{
        type: Schema.Types.ObjectId,
        ref: "Car",
    },
    duration:{
        type: Schema.Types.Number,
        required: true
    },
    turn:{
        type: Schema.Types.ObjectId,
        ref: "Turn",
    }
    })


const Service =  mongoose.model("Service", serviceSchema )

export default Service;