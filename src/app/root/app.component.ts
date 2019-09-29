import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    @HostListener('keyup', ['$event']) onkeyup(event: { key: string; target: { getAttribute: { (arg0: string): void; (arg0: string): void; }; }; }) {

        if (event.key == 'Enter' || event.key == 'ArrowDown') {
            var nextTab = +(event.target.getAttribute('tabindex')) + 1
            var elements = document.getElementsByTagName('input');
            for (var i = elements.length; i--;) {
                if (nextTab > elements.length) {
                    nextTab = 1
                }
                if (+(elements[i].getAttribute('tabindex')) == nextTab) {
                    elements[i].focus()
                    elements[i].select()
                    break
                }
            }
        }

        if (event.key == 'ArrowUp') {
            var previousTab = +(event.target.getAttribute('tabindex')) - 1
            var elements = document.getElementsByTagName('input');
            for (var i = elements.length; i--;) {
                if (previousTab == 0) previousTab = elements.length
                if (+(elements[i].getAttribute('tabindex')) == previousTab) {
                    elements[i].focus()
                    elements[i].select()
                    break
                }
            }
        }

    }

    @HostListener('document:keydown', ['$event']) anyEvent(event: { altKey: any; shiftKey: any; key: { toUpperCase: { (): string; (): string; (): string; (): string; (): string; }; }; }) {

        // console.log('Hotkey pressed', event.key + event.altKey + event.shiftKey)

        if (event.altKey + event.shiftKey) {
            if (event.key.toUpperCase() == 'N') { alert("New") }
            if (event.key.toUpperCase() == 'D') { alert("Delete") }
            if (event.key.toUpperCase() == 'F') { alert("Find") }
            if (event.key.toUpperCase() == 'P') { alert("Print") }
            if (event.key.toUpperCase() == 'S') { alert("Save") }
        }

    }

}
