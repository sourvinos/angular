import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[appInputFormat]'
})

export class InputFormatDirective {

    @Input('appInputFormat') format: string;

    constructor(private el: ElementRef) { }

    @HostListener('focus') onFocus() { }

    @HostListener('blur') onBlur() {
        if (this.format == 'lowerCase') {
            let value: string = this.el.nativeElement.value
            this.el.nativeElement.value = value.toLowerCase()

        } else {
            let value: string = this.el.nativeElement.value
            this.el.nativeElement.value = value.toUpperCase()
        }
    }

}
