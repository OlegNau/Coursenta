import { NgModule } from '@angular/core';
import {CourseComponent} from "./course.component";
import {CommonModule, DatePipe, UpperCasePipe} from "@angular/common";
import {CourseBorderByDateDirective} from "../../directives/course-border-by-date.directive";
import {DurationPipe} from "../../../../pipes/duration.pipe";

@NgModule({
    declarations: [CourseComponent],
    imports: [CommonModule, CourseBorderByDateDirective, UpperCasePipe, DurationPipe, DatePipe],
    exports: [CourseComponent],
})
export class CourseModule { }
