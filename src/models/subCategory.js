import mongoose from "mongoose";
const {Schema} = mongoose;


const subCategoySchema  = new Schema({
    name: {
        type: String,
        required: [true, "el nombre es obligatorio"]
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: 'CategoryProduct',
        required: true,
    }
})

const SubCategory = mongoose.model('SubCategory', subCategoySchema)


export default SubCategory;