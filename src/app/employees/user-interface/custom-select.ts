import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit } from '@angular/core';

@Component({
    selector: 'my-custom-select',
    templateUrl: './custom-select.html',
    styleUrls: ['./custom-select.css']
})

export class CustomSelectComponent implements OnInit {

    @Input() options: any[]
    @Output() notify: EventEmitter<string> = new EventEmitter<string>()

    ngOnInit() { }

    selectChangeHandler(event: any) {
        this.notify.emit(event.target.value)
    }

}