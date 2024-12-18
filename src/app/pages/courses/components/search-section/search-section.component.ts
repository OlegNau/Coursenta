import {Component, OnInit,ChangeDetectionStrategy} from '@angular/core';
import {FormControl} from "@angular/forms";
import {coursesActions} from "../../../../stores/courses.actions";
import {Store} from "@ngrx/store";
import {lengthValidator} from "../../../../validators/length-validator";
import { debounceTime, map, filter, } from 'rxjs/operators';

const ERROR_MESSAGE = 'Минимум 3 символа, максимум 15 символов';
const MIN_LENGTH = 3;
const MAX_LENGTH = 15;
const DEBOUNCE = 2000;

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SearchSectionComponent implements OnInit {
  readonly searchControl = new FormControl('');

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.setValidators();
    this.searchControl.valueChanges.pipe(
        debounceTime(DEBOUNCE),
        map(value => value ?? ''),
        filter(value => value.length > 2),
    ).subscribe(value => this.searchProcessing(value));
  }

  setValidators(): void {
    this.searchControl.setValidators(lengthValidator(MIN_LENGTH, MAX_LENGTH, ERROR_MESSAGE))
  }

  searchProcessing(value: string): void {
    if (this.searchControl.invalid || !this.searchControl.dirty) {
      return;
    }

    this.store.dispatch(coursesActions.setSearchPattern({searchPattern: value}));
  }
}