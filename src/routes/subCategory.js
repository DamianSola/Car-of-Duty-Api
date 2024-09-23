import { Router } from "express";
import { addSubCategory, GetAll } from "../controller/subCategory.js";

const router = Router()

router.get('/', GetAll)
router.post('/', addSubCategory)

export default router