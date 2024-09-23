import Car from "./../models/car.js"
import Brand from "./../models/brand.js"

export const getAll = async (req, res, next) => {


    try {
        const cars = await Car.find().populate("brand")
        res.send(cars)

    }catch(error){
        console.log(error)
        next(error)
    }
}

export const getOne = async (req, res, next) => {
    const {id} = req.params
    try {
        const car = await Car.findById(id).populate("brand")
        if(car){
            res.send(car)
        }else{
            res.status(404).send({message: "Car not found"})
        }
    }catch(error){
        next(error)
    }
}

export const deleteOne = async (req, res, next) => {
    const {id} = req.params

    try {
        const car = await Car.findById(id)
        if(car){
            await car.deleteOne();
            res.send({message:"car deleted" ,car : car})
        }else{
            res.status(404).send({message: "Car not found"})
        }

    }catch(error){
        next(error)

    }
}

export const update = async (req, res, next) => {
    try {

    }catch(error){

    }
}

export const post = async (req, res, next) => {

    let {name, type, brand, motor} = req.body;


    try {
        !name && res.status(400).json({message: "name is required"})
        !type && res.status(400).json({message: "type is required"})
        type !== 'camioneta' && type!== 'auto' && res.status(400).json({message: "type must be 'auto' or 'camionta'"})
        !brand && res.status(400).json({message: "brand is required"})
        !motor && res.status(400).json({message: "motor is required"})

        let car = await Car.findOne({name:name , type:type})

        if(car){
            res.status(403).json({message: "car already exists"})
        }else{
            const newCar = new Car({name, type, brand, motor})
            await newCar.save()
            res.json({message: "new car was added", newCar})
        }

    }catch(error){
        next(error)
    }
}
 


export const deleteAllCarOfBrand = async (req, res, next) => {
    const {id} = req.params
    console.log(id)

    try {
        const brand = await Brand.findById(id)
        if(brand){
            const result = await Car.deleteMany({ brand: id });  // Eliminamos los autos de esa marca
            res.send({ message: "Cars deleted", cant: result.deletedCount });
        }else{
            res.status(404).send({message: "Car not found"})
        }

    }catch(error){
        next(error)

    }
}