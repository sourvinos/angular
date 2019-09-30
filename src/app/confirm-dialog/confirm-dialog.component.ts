import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Subject } from 'rxjs';

@Component({
    selector: 'confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.css']
})

export class ConfirmDialogComponent {

    subject: Subject<boolean>

    constructor(public bsModalRef: BsModalRef) { }

    action(value: boolean) {
        this.bsModalRef.hide();
        this.subject.next(value);
        this.subject.complete();
    }
}