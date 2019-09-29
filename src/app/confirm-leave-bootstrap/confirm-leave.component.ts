import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-confirm-leave-bootstrap',
    templateUrl: './confirm-leave.component.html',
    styleUrls: ['./confirm-leave.component.css']
})

export class ConfirmLeaveBootstrapComponent {

    subject: Subject<boolean>;

    constructor(public bsModalRef: BsModalRef) { }

    action(value: boolean) {
        this.bsModalRef.hide();
        this.subject.next(value);
        this.subject.complete();
    }
}