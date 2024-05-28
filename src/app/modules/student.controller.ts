import { Request, Response } from 'express'
import { StudentServices } from './student.service'

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body
    const result = await StudentServices.createStudentIntoDB(studentData)

    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      date: result,
    })
  } catch (err) {
    console.log(err)
  }
}

export const StudentController = {
  createStudent,
}
