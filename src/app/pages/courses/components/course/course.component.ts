import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ConsoleService} from "../../../../services/console.service";
import {Course} from "../../../../interfaces/courses.interface";

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.less'],
    viewProviders: [{provide: ConsoleService, useValue: {onConsole: '!!!'}}],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent  {
    @Input() courseInfo!: Course;
    @Output() delete = new EventEmitter();


    onDelete(): void {
        this.delete.emit();
    }
}