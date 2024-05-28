// import { model } from 'mongoose'

export type Guardian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNumbrer: string
  motherName: string
  motherOccupation: string
  motherContactNumbrer: string
}

export type UserName = {
  firstName: string
  middleName: string
  lastName: string
}

export type LocalGuardian = {
  name: string
  occupation: string
  contactNo: string
  address: string
}

export type Student = {
  id: string
  name: UserName
  gender: 'male' | 'female'
  dateOfBirth?: string
  email: string
  contactNumber: string
  emergencyContactNumber: string
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  guardian: Guardian
  presentAddress: string
  permanentAddress: string
  localGuardian: LocalGuardian
  profileImage?: string
  isActive: 'active' | 'blocked'
}
