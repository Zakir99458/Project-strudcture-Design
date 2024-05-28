import express, { Router } from 'express'
import { StudentController } from './student.controller'

const router = express.Router()

// Call controller function
router.post('/create-student', StudentController.createStudent)

export const StudentRoute = router
