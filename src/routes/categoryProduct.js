import { Router } from "express";
import { getAll, post } from "../controller/categoryProduct.js";
const router = Router()

router.get('/', getAll);
router.post('/', post)

export default router;