export interface CoursesCardFilter {
    readonly searchPattern: string;
    readonly searchPatternForTopRated: boolean;
}

export interface Course {
    readonly id: string;
    readonly date: string;
    readonly name: string;
    readonly time: string;
    readonly description: string;
    readonly topRated: boolean;
    readonly authors: readonly string[],
}