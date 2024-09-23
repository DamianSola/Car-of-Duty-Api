import { Router } from "express";
import { getAll, getOne, deleteOne, update, post } from "../controller/product.js";

const router = Router()

router.get('/', getAll)
router.get('/:id', getOne)
router.delete('/:id', deleteOne)
router.put('/:id', update)
router.post('/', post)

export default router;