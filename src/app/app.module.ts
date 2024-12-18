import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRouterModule} from './app.router';
import { AppComponent } from './app.component';
import { EditCourseComponent } from './pages/edit-course/edit-course.component';
import { LoginComponent } from './pages/login/login.component';
import {FormsModule} from "@angular/forms";
import {FooterModule} from "./components/footer/footer.module";
import {HeaderModule} from "./components/header/header.module";
import {CoursesStoreModule} from "./stores/courses-store.module";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";

@NgModule({
  declarations: [
    AppComponent,
    EditCourseComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    FooterModule,
    HeaderModule,
    CoursesStoreModule,
    StoreModule.forRoot(
        {},
        {
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          },
        },
    ),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
