import type {PipeTransform} from '@angular/core';
import {Pipe} from "@angular/core";

@Pipe({
    name: 'durationPipe',
    standalone: true,
})
export class DurationPipe implements PipeTransform {
    transform(courseDuration: string | number): string {
        const duration = Number(courseDuration);

        if (isNaN(duration) || duration < 0) {
            return 'Invalid duration';
        }

        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;

        return hours > 0 ? `${hours} h ${minutes} min` : `${minutes} min`;
    }
}