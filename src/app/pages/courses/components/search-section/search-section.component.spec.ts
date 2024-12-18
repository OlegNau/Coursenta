import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSectionComponent } from './search-section.component';
import {FormsModule} from "@angular/forms";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('SearchSectionComponent', () => {
  let component: SearchSectionComponent;
  let fixture: ComponentFixture<SearchSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [SearchSectionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('создает компонент', () => {
    expect(component).toBeTruthy();
  });

  it('выдает inputValue при нажатии на кнопку поиска', () => {
    const emitSpy = jest.spyOn(component.inputValueChange, 'emit');
    const searchButton = fixture.nativeElement.querySelector('.button');
    component.inputValue = 'test';
    searchButton.dispatchEvent(new Event('click'));
    expect(emitSpy).toHaveBeenCalledWith('test');
  });
});
