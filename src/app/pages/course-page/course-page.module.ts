import {NgModule} from "@angular/core";
import {CoursePageComponent} from "./course-page.component";
import {CoursePageRouterModule} from "./course-page.router";
import {CommonModule, DatePipe} from "@angular/common";
import {DurationPipe} from "../../pipes/duration.pipe";

@NgModule({
    declarations: [CoursePageComponent],
    imports: [CommonModule, CoursePageRouterModule, DatePipe, DurationPipe],
    exports: [CoursePageComponent],
})
export class CoursePageModule {}