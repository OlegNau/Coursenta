import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewCourseComponent} from "./pages/new-course/new-course.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    loadChildren: () => import('./pages/courses/courses.module').then(m => {return m.CoursesModule})
  },
  {
    path: 'new-course',
    component: NewCourseComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
