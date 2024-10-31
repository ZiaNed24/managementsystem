import { Routes } from '@angular/router';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { CoursesComponent } from './components/courses/courses.component';
import { TeacherstudentcourseComponent } from './components/teacherstudentcourse/teacherstudentcourse.component';

export const routes: Routes = [
    {
        path:'student',
        component:StudentComponent
    },
    {
        path:'teacher',
        component:TeacherComponent
    },
    {
        path:'courses',
        component:CoursesComponent
    },
    {
        path:'teacherstudentcourse',
        component:TeacherstudentcourseComponent
    },
];
