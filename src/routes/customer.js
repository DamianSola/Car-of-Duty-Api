import { Router } from "express";
import {post,newCustomer,deleteOne,getOne,getAll} from  "../controller/customer.js"

const router = Router()

router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', post)
router.delete('/:id', deleteOne)


export default router;