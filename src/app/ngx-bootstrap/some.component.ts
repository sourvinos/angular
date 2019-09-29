import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'some',
    templateUrl: './some.component.html',
    styleUrls: ['./some.component.css']
})

export class SomeComponent {

    message: string;
    modalRef: BsModalRef;

    constructor(private modalService: BsModalService) { }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    confirm(): boolean {
        this.message = 'Confirmed!';
        return true
        // this.modalRef.hide();
    }

    decline(): boolean {
        this.message = 'Declined!';
        return false
        // this.modalRef.hide();
    }


}
