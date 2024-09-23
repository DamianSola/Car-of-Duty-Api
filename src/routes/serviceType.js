import { Router } from "express";
import { addServicetype, getServiceType, deleteServiceType, GetOneServiType} from "../controller/serviType.js";

const router = Router()

router.post('/', addServicetype)
router.get('/', getServiceType)
router.delete('/:id', deleteServiceType)
router.get('/:id', GetOneServiType)

export default router;