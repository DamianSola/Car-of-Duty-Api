import ServicType from "./../models/serviceType.js"

export const getServiceType = async (req, res, next) => {
    let {name} = req.query;

    try{
        if(name){
            let serviType = await ServicType.findOne({name:name}).populate('product')
            !serviType ? res.status(404).send({message: "service type not found"}) :
            res.status(200).send({message: "service type found", data: serviType})
        }else{
            let servicesTypes = await ServicType.find().populate('product').exec()
            res.status(200).json({cant: servicesTypes.length , data: servicesTypes})
        }
    }catch(error){
        next(error)
    }
}

export const GetOneServiType = async (req, res, next) => {
    let {id} = req.params;
    try{
        let serviType = await ServicType.findById(id).populate('product').exec();
        !serviType ? res.status(404).send({message: "service type not found"}) :
            res.status(200).send({message: "service type found", data: serviType})
        }catch(error){
            next(error)
    }
}

export const addServicetype = async (req, res, next) => {

    
    try{
        if(Array.isArray(req.body)){

            let services_type = req.body.map(e => {
                if(!e.name || !e.description || !e.duration) {
                    
                    res.send({
                        message: "'name', 'escription' y 'duration' son requeridos", 
                        error: e
                    })
                }
                return new ServicType(e)
            })
            await ServicType.bulkSave(services_type)
            res.status(200).send({message: "service type added", created: services_type.length  , data: services_type})
        }else{
    
        }

        const {name, description, duration} = req.body;
        


        if(!name) res.status(400).send({message: "name is required"})
        else if(!description) res.status(400).send({message: "description is required"})
        else if(!duration) res.status(400).send({message: "duration is required"})
        else{
            let serviType = await ServicType.findOne({name:name})
            if(serviType) res.status(400).send({message: "service type already exist"})
            else{
                let newServiType = new ServicType({name, description, duration})
                await newServiType.save()
                res.status(200).json({message: "new srvice type was added", newServiType})
            }
        }
    }catch(error){
        next(error)
    }
}

export const deleteServiceType = async (req, res, next) => {
    // implement delete service type logic here
    const {id} = req.params;
    try{
        let serviType = await ServicType.findById(id).exec()
        if(!serviType) res.status(404).send({message: "service type not exist"})
        else{
            await serviType.deleteOne()
            res.status(200).json({message: "service type was deleted"})
        }

    }catch(error){
        next(error)
    }
}