import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'template',
    templateUrl: './template.component.html',
    styleUrls: ['./template.component.css']
})

export class TemplateComponent {

    pageTitle: string = "Component interaction"
    imgUrl: string = "https://picsum.photos/200"
    count: number = 0
    name: string = ''
    userName: string = 'Empty'
    password: string = ''
    focusedField: string = ''
    private _customerName: string = 'Customer name'

    //#region Autofocus
    @ViewChild('nameRef') nameElementRef: ElementRef

    ngAfterViewInit() {
        this.nameElementRef.nativeElement.focus()
        console.log(this.nameElementRef)
    }
    //#endregion Autofocus

    incrementCount(): number {
        return this.count += 1
    }

    checkForPasswordChanges(event: string): boolean {
        if (event.length <= 4) {
            return false
        }
        return true
    }

    get customerName() {
        return this._customerName
    }

    set customerName(value: string) {
        this._customerName = value
        if (value == "John")
            console.log('Welcome back, John')
    }

}
