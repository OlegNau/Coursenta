import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {Course} from "../interfaces/courses.interface";

export const coursesActions = createActionGroup({
    source: 'COURSES',
    events: {
        Get: emptyProps(),
        'Get success': props<{coursesCards: readonly Course[]}>(),
        'Get fail': emptyProps(),
        'Set search pattern': props<{
            searchPattern: string;
        }>(),
        'Set search pattern top rated': props<{
            searchPatternForTopRated: boolean;
        }>(),
        'Get course': props<{courseId: string}>(),
        'Get course success': props<{course: Course | null}>(),
        'Get course fail': emptyProps(),
    },
});