import {Course, CoursesCardFilter} from "../interfaces/courses.interface";
import {Action, ActionType, createReducer, on} from "@ngrx/store";
import {coursesActions} from "./courses.actions";

export interface CoursesState {
    readonly filter: CoursesCardFilter;

    readonly loading: boolean;
    readonly loadingError: boolean;
    readonly coursesCards: readonly Course[];
}

export const COURSES_STATE_KEY = 'courses';

export const initialState: CoursesState = {
    filter: {searchPattern: '', searchPatternForTopRated: false},
    loading: false,
    loadingError: false,
    coursesCards: [],
};

const getingReducer = (state: CoursesState) => ({
    ...state,
    loading: true,
    loadingError: false,
    coursesCards: [],
});

const getSuccessReducer = (state: CoursesState, {coursesCards}: ActionType<typeof coursesActions.getSuccess>,) => {

    const cardsList: Course[] = coursesCards.map(courses => ({...courses}));

    cardsList.sort((course1: Course, course2: Course) => {
        const date1 = new Date(course1.date).getTime()
        const date2 = new Date(course2.date).getTime()

        return date2 - date1;
    })

    return {
        ...state,
        loading: false,
        loadingError: false,
        coursesCards: cardsList,
    }
};

const getFailReducer = (state: CoursesState) => ({
    ...state,
    loading: false,
    loadingError: true,
    coursesCards: [],
});

const setSearchPatternReducer = (
    state: CoursesState,
    {searchPattern}: ActionType<typeof coursesActions.setSearchPattern>,
) => ({
    ...state,
    filter: {
        ...state.filter,
        searchPattern,
    },
});

const getCourseReducer = (state: CoursesState) => ({
    ...state,
    loading: true,
    loadingError: false,
});

const getCourseSuccessReducer = (state: CoursesState, {course}: ActionType<typeof coursesActions.getCourseSuccess>,) => {
    if (course === null) {
        return state;
    }

    return {
        ...state,
        loading: false,
        loadingError: false,
        coursesCards: [course],
    }
};

const getCourseFailReducer = (state: CoursesState) => ({
    ...state,
    loading: false,
    loadingError: true,
    coursesCards: [],
});


const reducer = createReducer(
    initialState,

    on(coursesActions.get, getingReducer),
    on(coursesActions.getSuccess, getSuccessReducer),
    on(coursesActions.getFail, getFailReducer),
    on(coursesActions.setSearchPattern, setSearchPatternReducer),
    on(coursesActions.getCourse, getCourseReducer),
    on(coursesActions.getCourseSuccess, getCourseSuccessReducer),
    on(coursesActions.getCourseFail, getCourseFailReducer),
);

export function coursesReducer(state: CoursesState | undefined, action: Action): CoursesState {
    return reducer(state, action);
}