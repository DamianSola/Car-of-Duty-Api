import SubCategory from "../models/subCategory.js";

export const GetAll = async (req, res, next) => {
    try{
        const subCategories = await SubCategory.find().populate('category');
        res.json({cant: subCategories.length , subCategories});
    }catch(error){
        next(error)
    }
}

export const addSubCategory = async (req, res, next) => {

    let {name, category} = req.body;

    try{
        if(!name || !category) res.status(400).send({message:"name and category was required"})
        else{
            const newSubCategory = new SubCategory({name, category});
            await newSubCategory.save();
            res.send({message: 'new subcategory was created', subCategory: newSubCategory})
        }

    }catch(error){
        next(error)
    }
}


