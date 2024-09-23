import { Router } from "express";
import { post, getOne, getAll } from "../controller/service.js";
const router = Router()


router.post('/', post)
router.get('/', getAll)

export default router;