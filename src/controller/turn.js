import Turn from "../models/turn.js";
import Customer from "../models/customer.js"
import {newCustomer} from "./customer.js"
import Service from "../models/service.js";

export const getAll = async (req, res, next) => {

    try {
        let {number} = req.query;

        if(number){
            const turn = await Turn.findOne({turnNumber: number}).populate('customer').exec();
            return res.send(turn)
        }

        const turns = await Turn.find().populate("customer").exec();
        res.json(turns);

    }catch(error){

    }
}

export const getOne = async (req, res, next) => {

    const {id} = req.params;

    try {
        const getTurn = await Turn.findById(id).populate('customer')

        if(!getTurn){
            res.send({message: "no se encontro el turno"})
        }else{

            const getSevices = await Service.find({turn:getTurn.id})

            res.json({getTurn, getSevices})
        }
        

    }catch(error){

    }
}

export const deleteOne = async (req, res, next) => {

    const {id} = req.params;

    try {
        const deleteTurn = await Turn.findByIdAndDelete(id)
        res.json({message:"elturno fue eliminado", deleteTurn})
    }catch(error){
        next(error)
    }
}

export const update = async (req, res, next) => {
    try {

    }catch(error){

    }
}


const bulkSaveServices = async ({services, turnId}) => {

    const arrayServices = services.map((item) => {
        return new Service({name: item.name, 
            duration: item.duration,
            price: item.price,
            turn: turnId,
            car: item.car,
            product: item.product._id
            
        })
    })

    await Service.bulkSave(arrayServices)
}

export const newTurn = async (req, res, next) => {

    const {date, time, services,customer} = req.body;

    // console.log(date, customer)    

    try {

        const dateTime = new Date(date)

        if(isNaN(dateTime.getTime())) return res.status(400).send({message: 'fecha no valida'})

        let searchCustomer = await Customer.findOne({email:customer.email})

        if(!searchCustomer){

            let addnewCustomer = await newCustomer(customer)

            const newTurn = new Turn({date, customer: addnewCustomer._id})
            await newTurn.save()
            let turnId = newTurn.id
            let servicesSaved = await bulkSaveServices({services, turnId})

            res.send({message:'Se guardo un turno para tu auto', newTurn, services})

        }else{

            const newTurn = new Turn({date, customer: searchCustomer._id})
            await newTurn.save()
            let turnId = newTurn.id
            let servicesSaved = await bulkSaveServices({services, turnId})

            console.log(servicesSaved)

            res.send({message:'Se guardo un turno para tu auto', newTurn, services})
        }




        // //preguntamos si hay fecha y hora
        // if (!date || !time) {
        //     return res.status(400).json({ message: 'Date and time are required' });
        // }

        // //creamos el formato de fecha y hora 
        // // const dateTimeString = `${date}T${time}:00Z`;
        // // const dateTime = new Date(dateTimeString);
        
  
        // //preguntamos si hay si hay datos del cliente
        // if(!email || !name){
        //     return res.status(400).json({message: "name and email was required"})
        // }
        // // buscar cliente en la db
        // const existCustomer = await Customer.findOne({ email }).exec();
        // //si no existe, crearlo
        // const customer = !existCustomer ? await newCustomer({name, lastName, email}) : existCustomer;

        // //falta corroborar si la fecha ya esta ocupada o no
        // // creamos nuevo turno
        // const newTurn = new Turn({date: dateTime, customer: customer._id})
        // await newTurn.save()
        
        // res.json({message: "Turn created successfully", newTurn})

        // res.send({message:'me llego'})
      
    }catch(error){
        console.log(error)
        res.status(500).json({message: "Error creating turn"})
    }
}