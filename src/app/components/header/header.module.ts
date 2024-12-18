import { NgModule } from '@angular/core';
import {HeaderComponent} from "./header.component";
import {HeaderRouterModule} from "./header.router";

@NgModule({
    declarations: [HeaderComponent],
    imports: [HeaderRouterModule],
    exports: [HeaderComponent],
})
export class HeaderModule { }
