import mongoose from "mongoose";
const {Schema} = mongoose;


const categoryProductSchema  = new Schema({
    name: {
        type: String,
        required: [true, "el nombre de la categoria es obligatorio"]
    },
    subCategory: {
        type: Schema.Types.ObjectId,
        ref: 'subCategory'
    }
})

// categoryProductSchema.virtual('SubCategory', {
//     ref: 'SubCategory',
//     localField: '_id',
//     foreignField: 'category'
// })

const CategoryProduct = mongoose.model('CategoryProduct', categoryProductSchema)

export default CategoryProduct;