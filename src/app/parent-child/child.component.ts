import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EmitterVisitorContext } from '@angular/compiler';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})

export class ChildFromParentComponent {

    @Input() fruits: any[]
    @Output() selectEvent = new EventEmitter()

    selectedIndex: number

    ngOnInit() {
        console.log(console.log('Init on child initialized'))
    }

    selectFruit(index: number) {
        this.selectEvent.emit(this.fruits[index])
    }

    startTimer() {
        console.log('Timer started')
    }

    stopTimer() {
        console.log('Timer stopped')
    }

}
