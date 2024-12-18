import { NgModule } from '@angular/core';
import {CoursesComponent} from "./courses.component";
import {CourseModule} from "./components/course/course.module";
import {CommonModule} from "@angular/common";
import {SearchSectionModule} from "./components/search-section/search-section.module";
import {CoursesRouterModule} from "./courses.router";

@NgModule({
    declarations: [CoursesComponent],
    imports: [CommonModule, CourseModule, SearchSectionModule, CoursesRouterModule],
    exports: [CoursesComponent],
})
export class CoursesModule {}
