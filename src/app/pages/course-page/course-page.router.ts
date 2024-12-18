import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CoursePageComponent} from "./course-page.component";

const routes: Routes = [
    {
        path: '',
        component: CoursePageComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoursePageRouterModule { }