import mongoose from "mongoose";
const {Schema} = mongoose;

const productoSchema  = new Schema({
    name: {
        type: String,
        required: [true, "el nombre es obligatorio"]
    },
    description: {
        type: String,
        required: [true, "la descripción es obligatoria"]
    },
    price: {
        type: Schema.Types.Decimal128,
        required: [true, "el precio es obligatorio"]
    },
    stock: {
        type: Number,
        required: [true, "el stock es obligatorio"]
    },
    upDate: { 
        type: Date, 
        default: Date.now,
    },
    subCategory: {
        type: Schema.Types.ObjectId,
        ref: "subCategory",
    },
    motor:{
        type: Schema.Types.Array,
    },
    image:{
        type: Schema.Types.String
    },
    Service_type:{
        type: Schema.Types.ObjectId,
        ref:'serviceType'
    },
    brandCar:[{
        type: Schema.Types.ObjectId,
        ref: 'Brand'
    }]
    })


const Product =  mongoose.model("Product", productoSchema )

export default Product