import {createFeatureSelector, createSelector} from "@ngrx/store";
import {COURSES_STATE_KEY, CoursesState} from "./courses.reducer";

const coursesStateSelector = createFeatureSelector<CoursesState>(COURSES_STATE_KEY);

export const coursesSelectors = {
    state: createSelector(coursesStateSelector, state => state),
    searchPattern: createSelector(coursesStateSelector, state => state.filter.searchPattern),
    loading: createSelector(coursesStateSelector, state => state.loading),
    loadingError: createSelector(coursesStateSelector, state => state.loadingError),
    coursesCards: createSelector(coursesStateSelector, state => state.coursesCards),
    selectCourseById: (courseId: string) => createSelector(
        coursesSelectors.coursesCards,
        (courses) => {

            return courses.find(course => course.id === courseId) ?? null;
        }
    ),
}