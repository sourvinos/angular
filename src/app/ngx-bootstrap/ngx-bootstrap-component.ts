import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertComponent } from 'ngx-bootstrap/alert/public_api';

@Component({
    selector: 'ngxBootstrap',
    templateUrl: './ngx-bootstrap.component.html',
    styleUrls: ['./ngx-bootstrap.component.css']
})

export class ngxBootstrapComponent {

    modalRef: BsModalRef;
    message: string;

    constructor(private modalService: BsModalService) { }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-lg' }));
    }

    confirm(): void {
        this.message = 'Confirmed!';
        this.modalRef.hide();
    }

    decline(): void {
        this.message = 'Declined!';
        this.modalRef.hide();
    }

    alerts: any[] = [{
        type: 'success',
        msg: `Well done! You successfully read this important alert message. (added: ${new Date().toLocaleTimeString()})`,
        timeout: 5000
    }];

    add(): void {
        this.alerts.push({
            type: 'info',
            msg: `This alert will be closed in 5 seconds (added: ${new Date().toLocaleTimeString()})`,
            timeout: 5000
        });
    }

    onClosed(dismissedAlert: AlertComponent): void {
        this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
    }

}
