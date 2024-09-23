import { Router } from "express";
import { getAll, getOne, post, update } from "../controller/brand.js";

const router = Router()


router.get('/', getAll)
router.post('/', post)
router.get('/:id', getOne)

export default router;