import Car from "../models/car.js"
import Product from "../models/product.js"
import Service from "../models/service.js"
import ServiceType from "../models/serviceType.js"

export const getAll = async (req, res, next) => {
    try {
        const services = await Service.find()
        let count = services.length
        res.json({count, services})

    }catch(error){
        next(error)
    }
}

export const getOne = async (req, res, next) => {

    try {
        const allServices = await Service.find()
        res.send(allServices)
    }catch(error){
        next(error)
    }
}

export const deleteOne = async (req, res, next) => {
    try {

    }catch(error){

    }
}

export const update = async (req, res, next) => {
    let {product} = req.body
    
    try {

    }catch(error){

    }
}

export const post = async (req, res, next) => {
    let {car, service} = req.body;
   
    // let car = await Car.findOne({name:name , model:model})
    try {
        let carService = await Car.findOne({_id: car}).populate('brand')

        let allProducts = await Product.find()
        let product = allProducts.find(e => e)

        let services = await ServiceType.find({ _id: { $in: service } });
        
        let products = await Product.find({ _id: { $in: product } });

        let totalDuration = services.reduce((total, s) => total + s.duration, 0);

        // let product = await Product.findOne({car: car})

        // const newService = new Service({car: car, service: service, product, price:"2000"})

        // console.log(carService, service, product)
        res.send({carService, services, products, duration:totalDuration})

        // const newService = new Service({name: serviceType.name, price: product.price.$numberDecimal, product: product})

    }catch(error){
        console.log(error)
        next(error)
    }
}