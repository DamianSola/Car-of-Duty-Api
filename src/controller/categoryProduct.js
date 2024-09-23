
import CategoryProduct from "./../models/categoryProduct.js"

export const getAll = async (req, res, next) => {
    let {name} = req.query;


    try {
        if(name){
            const category = await CategoryProduct.findOne({name: name});
            category ? res.json(category) : res.send({mesagge: "category not found"})
        }else{
            const categories = await CategoryProduct.find().populate('subCategory');
            res.json({cant: categories.length,  categories});
        }

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
    try {

    }catch(error){

    }
}

export const update = async (req, res, next) => {
    try {

    }catch(error){

    }
}

export const post = async (req, res, next) => {

    let {name} = req.body
   
    try {

        if(!name) res.status(400).send({message:'name is required'})
        else{ 
            const newCategory = new CategoryProduct({name})
            await newCategory.save()
            res.status(201).json({message:'new categorie was added', newCategory})
        }

    }catch(error){

    }
}