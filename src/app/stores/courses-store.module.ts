import {StoreModule} from "@ngrx/store";
import {COURSES_STATE_KEY, coursesReducer} from "./courses.reducer";
import {NgModule} from "@angular/core";
import {EffectsModule} from "@ngrx/effects";
import {CoursesEffects} from "./courses.effects";

@NgModule({
    imports: [
        StoreModule.forFeature(COURSES_STATE_KEY, coursesReducer),
        EffectsModule.forFeature([CoursesEffects]),
    ],
})
export class CoursesStoreModule {}