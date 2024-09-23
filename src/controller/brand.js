import Brand from "./../models/brand.js"


export const getAll = async (req, res, next) => {
    let {name} = req.query;
    

    try {
        if(name){
            let brand = await Brand.findOne({name:name})
            res.send(brand)
        }
        const brands = await Brand.find()
        let count = await brands.length
        res.json({count, brands})

    }catch(error){
        next(error);

    }
}

export const getOne = async (req, res, next) => {
    try {
        const brand = await Brand.findById(req.params.id).exec()
        if (!brand) {
            return res.status(404).json({ message: "Brand not found" })
        }
            res.json(brand)

    }catch(error){
        next(error)
    }
}

export const deleteOne = async (req, res, next) => {
    try {

    }catch(error){

    }
}

export const post = async (req, res, next) => {

    let {name, image} = req.body;

    try {
        if( !name || !image){
            res.status(400).json({message: "name and image was required"})
        }
        
        const brand = await Brand.findOne({name:name}).exec()

        if(brand){
            return res.status(400).json({message: "Brand already exists" })
        }
 
        const newBrand  =  new Brand(req.body)
        await newBrand.save()
        res.status(201).json({ message: "Brand was added" , newBrand});

    }catch(error){
        next(error)
    }
}

export const update = async (req, res, next) => {
    try {

    }catch(error){

    }
}