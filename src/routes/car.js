import { Router } from "express";
import { getAll, post ,getOne, deleteOne, deleteAllCarOfBrand } from "../controller/car.js";

const router = Router()

router.get('/', getAll)
router.post('/', post)
router.get('/:id', getOne)
router.delete('/:id', deleteOne)
router.delete('/:id', deleteAllCarOfBrand)

export default router;