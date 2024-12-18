import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {coursesActions} from "./courses.actions";
import {catchError, combineLatest, delay, map, of, tap, withLatestFrom} from "rxjs";
import {coursesSelectors} from "./courses.selectors";
import {CoursesService} from "../services/courses.service";
import {Course} from "../interfaces/courses.interface";

const LOADING_TIME = 5000;

@Injectable()
export class CoursesEffects {
    constructor(
        private readonly actions$: Actions,
        private readonly store: Store,
        private readonly coursesService: CoursesService,
    ) {}

    readonly changeSearchParams$ = createEffect(() =>
        combineLatest([
            this.actions$.pipe(ofType(coursesActions.setSearchPattern)),
            this.actions$.pipe(ofType(coursesActions.setSearchPatternTopRated))
        ])
            .pipe(
            map(() => coursesActions.get()),
        ),
    );

    readonly getCourses$ = createEffect(() =>
        this.actions$.pipe(
            ofType(coursesActions.get),
            delay(LOADING_TIME),
            withLatestFrom(
                this.store.select(coursesSelectors.state)),
            map(([_, state]) => {
                const {filter} = state;

                const filteredCourses: readonly Course[] = this.coursesService.filterCourses(filter.searchPattern);

                return coursesActions.getSuccess({ coursesCards: filteredCourses });
            }),
            catchError(() => of(coursesActions.getFail())),
        ),
    );

    readonly getCoursesFail$ = createEffect(() =>
        this.actions$.pipe(
            ofType(coursesActions.getFail),
            tap(() => {
                return console.log('ошибка загрузки курсов');
            })
        ),
    )

    readonly getCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(coursesActions.getCourse),
            map(({courseId}) => {

                const course = this.coursesService.getCourse(courseId);

                return coursesActions.getCourseSuccess({course});
            }),
            catchError(() => of(coursesActions.getCourseFail())),
        ),
    );

    readonly getCourseFail$ = createEffect(() =>
        this.actions$.pipe(
            ofType(coursesActions.getFail),
            tap(() => {
                return console.log('ошибка загрузки курса');
            })
        ),
    )
}