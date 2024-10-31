// src/app/services/teacher.service.ts
import { Injectable } from '@angular/core';
import { Teacher } from '../models/teacher';

@Injectable({
    providedIn: 'root'
})
export class TeacherService {
    private teachers: Teacher[] = [
        { id: '1', name: 'John Doe', subject: 'Mathematics', hireDate: new Date(Date.now() - 5 * 60 * 1000) }, // Hired 5 min ago
        { id: '2', name: 'Jane Smith', subject: 'Science', hireDate: new Date(Date.now() - 15 * 60 * 1000) }, // Hired 15 min ago
        { id: '3', name: 'Alice Johnson', subject: 'English', hireDate: new Date(Date.now() - 2 * 60 * 1000) }, // Hired 2 min ago
    ];

    getTeachers(): Promise<Teacher[]> {
        return Promise.resolve(this.teachers);
    }
}
