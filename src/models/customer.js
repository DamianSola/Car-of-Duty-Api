import mongoose from "mongoose";
const {Schema} = mongoose;


const customerSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    turn: {
        type: Schema.Types.ObjectId,
        ref: 'Turn'
    },
    dates:{
        type: Number,
        required: true
    }
   
})

const Customer = mongoose.model('Customer', customerSchema)

export default Customer;
