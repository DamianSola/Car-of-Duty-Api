import Customer from "../models/customer.js"

export const getAll = async (req, res, next) => {


    try {

        const allcustomer = await Customer.find()

        res.send(allcustomer)

    }catch(error){
        next(error)
    }
}

export const getOne = async (req, res, next) => {
    try {

    }catch(error){

    }
}

export const deleteOne = async (req, res, next) => {

    const {id} = req.params;
    try {
        const customer = await Customer.findByIdAndDelete(id)
        res.send(customer)

    }catch(error){
        next(error)
    }
}

export const update = async (req, res, next) => {
    try {

    }catch(error){

    }
}

export const newCustomer = async ({name, email, phone}) => {
    try {
        const customer = new Customer({name, email, phone, dates: 1});
        await customer.save();
        return customer;
    } catch (error) {
        throw error;
    }
}

export const post = async (req, res, next) => {
    try {
        const { name, lastName, email } = req.body;
        const existCustomer = await Customer.findOne({ email }).exec();
        if(existCustomer){
            return res.status(400).json({ message: "Customer already exist" });
        }
        const customer = await newCustomer({name, lastName, email});
        res.json(customer);
    }catch(error){
        next(error);
    }
}