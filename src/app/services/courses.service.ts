import {Injectable} from "@angular/core";
import {Course} from "../interfaces/courses.interface";
import {coursesList} from "../courses";

@Injectable({
    providedIn: "root",
})

export class CoursesService {
    filterCourses(searchValue: string): readonly Course[] {
        if (searchValue === '') {
            return coursesList;
        }

        return coursesList.filter(course => {
            return  course.description.includes(searchValue) || course.name.includes(searchValue) || course.date.includes(searchValue);
        });
    };

    getCourse(id: string): Course | null {
        return coursesList.find(course => course.id === id) ?? null;
    };
}