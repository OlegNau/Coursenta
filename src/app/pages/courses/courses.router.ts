import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CoursesComponent} from "./courses.component";

const routes: Routes = [
    {
        path: '',
        component: CoursesComponent,
    },
    {
        path: `course/:courseId`,
        loadChildren: () => import('../course-page/course-page.module').then(m => {return m.CoursePageModule})
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoursesRouterModule { }