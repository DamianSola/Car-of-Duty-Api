import mongoose from "mongoose";
const {Schema} = mongoose;


const serviceTypeSchema  = new Schema({
    name: {
        type: String,
        required: [true, "el nombre es obligatorio"]
    },
    description: {
        type: String,
        required: [true, "la descripción es obligatoria"]
    },
    duration: {
        type: Number,
        required: [true, "la duración es obligatoria"]
    },
    product:[{
        type: Schema.Types.ObjectId,
        ref: 'Product',
    }]
})

const ServiceType = mongoose.model("serviceType", serviceTypeSchema )

export default ServiceType;
