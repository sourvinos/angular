import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-confirm-leave',
    templateUrl: './confirm-leave.component.html'
})

export class ConfirmLeaveComponent {

    subject: Subject<boolean>;

    constructor(public bsModalRef: BsModalRef) { }

    action(value: boolean) {
        this.bsModalRef.hide();
        this.subject.next(value);
        this.subject.complete();
    }
}