import { Router } from "express";
import {getAll, newTurn, getOne, deleteOne} from "./../controller/turn.js";

const router = Router()

router.post('/', newTurn)
router.get('/', getAll)
router.get('/:id', getOne)
router.delete('/:id', deleteOne)

export default router;