import { Component, HostListener, AfterViewInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Subject } from 'rxjs';

@Component({
    selector: 'modal-index',
    templateUrl: './modal-index.component.html',
    styleUrls: ['./modal-index.component.css']
})

export class ModalIndexComponent implements AfterViewInit {

    currentItem: number = 0
    itemCount: number = 2

    subject: Subject<boolean>

    constructor(public bsModalRef: BsModalRef) { }

    action(value: boolean) {
        this.bsModalRef.hide();
        this.subject.next(value);
        this.subject.complete();
    }

    ngAfterViewInit() {
        console.log('After view init')
        this.currentItem = 0
        console.log('Count', this.itemCount)
        console.log('After init', this.currentItem)
        document.querySelectorAll('li')[0].classList.add('selected')
    }

    @HostListener('document:keydown', ['$event']) anyEvent(event: { altKey: any; shiftKey: any; key: { toUpperCase: { (): string; (): string; (): string; (): string; (): string; }; }; }) {
        if (event.key == 'ArrowUp') {
            document.querySelectorAll('li')[this.currentItem].classList.remove('selected')
            this.currentItem = --this.currentItem < 0 ? this.currentItem = this.itemCount - 1 : this.currentItem
            document.querySelectorAll('li')[this.currentItem].classList.add('selected')

        }
        if (event.key == 'ArrowDown') {
            document.querySelectorAll('li')[this.currentItem].classList.remove('selected')
            this.currentItem = ++this.currentItem >= this.itemCount ? this.currentItem = 0 : this.currentItem
            document.querySelectorAll('li')[this.currentItem].classList.add('selected')
        }
    }

}