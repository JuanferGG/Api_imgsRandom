import { Router } from "express";
import { getEmployees, getEmploye } from '../controllers/employees.controller.js' 

const router = Router()

router.get('/employees', getEmployees)
router.get('/employee/:id_data', getEmploye)


export default router