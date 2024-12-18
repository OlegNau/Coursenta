import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {coursesList} from "../../courses";
import {coursesActions} from "../../stores/courses.actions";
import {Store} from "@ngrx/store";
import {coursesSelectors} from "../../stores/courses.selectors";
import {FormControl} from "@angular/forms";
import {debounceTime, filter, map} from "rxjs/operators";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent implements OnInit {
  public courses = coursesList;
  readonly topRatedCheckForSearch = new FormControl(false);

  readonly coursesCards$ = this.store.select(coursesSelectors.coursesCards);
  readonly isLoading$ = this.store.select(coursesSelectors.loading);

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
   this.loadCourses();
    this.topRatedCheckForSearch.valueChanges.pipe(
        debounceTime(1000),
        map(value => value ?? false),
    ).subscribe(value => this.searchProcessingForTopRated(value));
  }

  loadCourses(): void {
    this.store.dispatch(coursesActions.get());
  }

  onClick(): void {
  }

  onDelete(): void {
    console.log('Нажатие на кнопку Delete');
  }

  searchProcessingForTopRated(value: boolean): void {
    this.store.dispatch(coursesActions.setSearchPatternTopRated({searchPatternForTopRated: value}));
  }
}
