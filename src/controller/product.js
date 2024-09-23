import Product from "./../models/product.js"

export const getAll = async (req, res, next) => {
    try {
        const products = await Product.find().populate('Service_type')
        res.json(products);

    }catch(error){
        next(error);
    }
}

export const getOne = async (req, res, next) => {
    
    try {
        const id = req.params.id;
        const product = await Product.findById(id).populate('Service_type').exec();
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json(product);

    }catch(error){
        next(error);
    }
}

export const deleteOne = async (req, res, next) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id).exec();
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        await product.deleteOne();
        res.status(200).send({message: "product was deleted"})

    }catch(error){
        next(error)
    }
}

export const update = async (req, res, next) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true }).exec();
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(product)

    }catch(error){
        console.log(error)
        next(error)
    }
}

export const post = async (req, res, next) => {
    
    const {name,  images, stock, price, description, motor, brandCar, Service_type} = req.body;


    try {

        let motorTypes = ["diesel", "nafta"]

        let checkMotor = motor.filter(e => !motorTypes.includes(e));

        if(checkMotor.length > 0){
            res.send({message: ` ${checkMotor[0]} no es valido, debe poner "diesel", "nafta" o "GNC" ` })
        }

        const newProduct = new Product(req.body)

        await newProduct.save()
        res.json(newProduct)

        
    }catch(error){
        next(error)
    }
}