import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Subject } from 'rxjs';

@Component({
    selector: 'modal-index',
    templateUrl: './modal-index.component.html',
    styleUrls: ['./modal-index.component.css']
})

export class ModalIndexComponent {

    subject: Subject<boolean>

    constructor(public bsModalRef: BsModalRef) { }

    action(value: boolean) {
        this.bsModalRef.hide();
        this.subject.next(value);
        this.subject.complete();
    }
}