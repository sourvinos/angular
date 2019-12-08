import { Directive, HostListener, ElementRef, Input } from '@angular/core'

@Directive({
    selector: '[appSelectAll]'
})

export class SelectAllDirective {

    @Input('appSelectAll') format: string

    constructor(private el: ElementRef) { }

    @HostListener('focus') onfocus() {
        this.el.nativeElement.select()
    }

}
