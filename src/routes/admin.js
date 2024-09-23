import { Router } from "express";
import admin from "./../controller/admin"

const router = Router()

router.get('/', admin.getAll)