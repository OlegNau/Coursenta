import {Directive, ElementRef, Host, Input, OnInit, Renderer2} from "@angular/core";
import {ConsoleService} from "../../../services/console.service";

const TWO_WEEKS = 86400000 * 14;

@Directive({
    selector: '[courseBorderByDate]',
    standalone: true,
})
export class CourseBorderByDateDirective implements OnInit{
    @Input('courseDate') courseDate!: string;

    constructor(@Host() private readonly  consoleService: ConsoleService, readonly el: ElementRef, private readonly renderer: Renderer2){}

    ngOnInit(): void {
        this.changeBorder();
        console.log(this.consoleService.onConsole);
    }

    changeBorder(): void {
        if (this.courseDate === null) {
            return console.log("Invalid date")
        }

        const dateNow = new Date().getTime();
        const date = new Date(this.courseDate).getTime();

        if (date > dateNow) {
            this.renderer.setStyle(this.el.nativeElement, "border", "1px solid #70B6F6");
            return;
        }

        if (date >= (dateNow - TWO_WEEKS)) {
            this.renderer.setStyle(this.el.nativeElement, "border", "1px solid rgba(84, 219, 122, 0.6)");
            return;
        }

        return
    }
}