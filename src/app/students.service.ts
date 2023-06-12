import { Injectable } from '@angular/core';

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  dob?: string;
  parentName?: string;
  photoUrl?: string;
  status?: 'present' | 'absent';
}

const mockStudents: Student[] = [
  { id: '1', firstName: 'Greg', lastName: 'Marine' },
  { id: '2', firstName: 'Jonatton', lastName: 'Bennet' },
  { id: '3', firstName: 'Harry', lastName: 'Potter' },
  { id: '4', firstName: 'Ron', lastName: 'Weasley' },
  { id: '5', firstName: 'Hermione', lastName: 'Granger' },
  { id: '6', firstName: 'Albus', lastName: 'Dumbledore' },
  { id: '7', firstName: 'Mr', lastName: 'Hagrid' },
  { id: '8', firstName: 'Severus', lastName: 'Snape' },
  { id: '9', firstName: 'Lord', lastName: 'Voldemort' },
  { id: '10', firstName: 'Tom', lastName: 'Riddle' },
];

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor() {}

  getAll() {
    return [...mockStudents];
  }
}
