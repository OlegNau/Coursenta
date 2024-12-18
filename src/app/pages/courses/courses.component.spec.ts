import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('CourseComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('создает компонент', () => {
    expect(component).toBeTruthy();
  });

  it('отправляет в консоль значение "Нажатие на кнопку Load more" при вызове onClick', () => {
    console.log = jest.fn();
    component.onClick();
    expect(console.log).toHaveBeenCalledWith('Нажатие на кнопку Load more');
  });

  it('отправляет в консоль значение "Нажатие на кнопку Delete" при вызове onDelete', () => {
    console.log = jest.fn();
    component.onDelete();
    expect(console.log).toHaveBeenCalledWith('Нажатие на кнопку Delete');
  });
})
