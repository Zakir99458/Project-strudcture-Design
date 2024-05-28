import { Schema, model } from 'mongoose'
import { Guardian, LocalGuardian, Student, UserName } from './student.interface'

// creating Schema
const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String, // Corrected typo from 'tyep' to 'type'
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
})

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNumber: {
    type: String, // Corrected typo from 'fatherContactNumbrer' to 'fatherContactNumber'
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  motherContactNumber: {
    type: String, // Corrected typo from 'motherContactNumbrer' to 'motherContactNumber'
    required: true,
  },
})

const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
})

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: {
    type: String,
    enum: ['male', 'female'], // Correctly define enum
    required: true,
  },
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  emergencyContactNumber: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], // Correctly define enum
    required: true,
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImage: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'blocked'], // Correctly define enum
    required: true,
  },
})

// Now creating model
export const StudentModel = model<Student>('Student', studentSchema)
