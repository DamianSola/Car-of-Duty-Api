import { Router } from "express";
import ProductRoutes from './product.js'
import BrandRoutes from './brand.js'
import TurnRoutes from './turn.js'
import CarRoutes from './car.js'
import ServiceType from './serviceType.js';
import CategoryProduct from './categoryProduct.js';
import SubCategory from './subCategory.js';
import Service from './service.js';
import brandCar from './brandCar.js';
import Customer from './customer.js';

const router = Router()

// router.use(express.json());

// router.use('/admin', import('./admin'))
router.use('/product', ProductRoutes)
router.use('/brand', BrandRoutes)
router.use('/turn', TurnRoutes)
router.use('/car', CarRoutes)
router.use('/car-brand', brandCar)
router.use('/service-type', ServiceType)
router.use('/category', CategoryProduct)
router.use('/sub-category', SubCategory)
router.use('/service', Service)
router.use('/customer', Customer)

export default router;