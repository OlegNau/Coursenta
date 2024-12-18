import {ComponentFixture, TestBed} from "@angular/core/testing";
import {CourseComponent} from "./course.component";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import * as faker from "faker";

describe('CourseComponent', () => {
    let component: CourseComponent;
    let fixture: ComponentFixture<CourseComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CourseComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CourseComponent);
        component = fixture.componentInstance;
        component.courseInfo = {
            date: faker.datatype.string(),
            name: faker.datatype.string(),
            time: faker.datatype.string(),
            description: faker.datatype.string(),
            topRated: faker.datatype.boolean()
        };
        fixture.detectChanges();
    });

    it('создает компонент', () => {
        expect(component).toBeTruthy();
    });

    it('выполняет отправку события при вызове onDelete', () => {
        const deleteSpy = jest.spyOn(component.delete, 'emit');

        component.onDelete();
        expect(deleteSpy).toHaveBeenCalled();
    })

    it('отображает корректную информацию о курсе', () => {
        const courseElement: HTMLElement = fixture.nativeElement;
        const dateElement = courseElement.querySelector('.date');
        const nameElement = courseElement.querySelector('.title');
        const timeElement = courseElement.querySelector('.badge');
        const descriptionElement = courseElement.querySelector('.description');
        const topRatedElement = courseElement.querySelector('.star');

        expect(dateElement!.textContent).toContain(component.courseInfo.date);
        expect(nameElement!.textContent).toContain(component.courseInfo.name);
        expect(timeElement!.textContent).toContain(component.courseInfo.time);
        expect(descriptionElement!.textContent).toContain(component.courseInfo.description);
        expect(descriptionElement!.textContent).toContain(component.courseInfo.topRated);
    });
})
