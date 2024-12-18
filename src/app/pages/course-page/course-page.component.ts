import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {coursesActions} from "../../stores/courses.actions";
import {Course} from "../../interfaces/courses.interface";
import {coursesSelectors} from "../../stores/courses.selectors";

@Component({
    selector: 'app-course-page',
    templateUrl: './course-page.component.html',
    styleUrls: ['./course-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursePageComponent implements OnInit{
    readonly courseId: string | null = this.activatedRoute.snapshot.paramMap.get('courseId');
    readonly course$ = this.store.select(coursesSelectors.selectCourseById(String(this.courseId)));

    constructor(private readonly store: Store, private readonly activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.loadCourse();
    }

    loadCourse(): void {
        if (this.courseId === null) {
            return
        }

        this.store.dispatch(coursesActions.getCourse({courseId: this.courseId}));
    }
}