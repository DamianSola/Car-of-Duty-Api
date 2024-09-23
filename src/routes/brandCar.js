import {deleteAllCarOfBrand} from "./../controller/car.js"
import { Router } from "express";

const router = Router()

router.delete('/:id', deleteAllCarOfBrand)

export default router;