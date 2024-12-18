import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {SearchSectionComponent} from "./search-section.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [SearchSectionComponent],
    imports: [CommonModule, FormsModule, FormsModule,
        ReactiveFormsModule],
    exports: [SearchSectionComponent],
})
export class SearchSectionModule {}