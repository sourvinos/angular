import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    showLoadingIndication: boolean = true

    constructor(private router: Router) {
        this.router.events.subscribe((routerEvent) => {
            if (routerEvent instanceof NavigationStart) {
                this.showLoadingIndication = true
            }
            if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError) {
                this.showLoadingIndication = false
            }
        })
    }

    @HostListener('keyup', ['$event']) onkeyup(event: { key: string; target: { getAttribute: { (arg0: string): void; (arg0: string): void; }; }; }) {

        if (event.key == 'Enter' || event.key == 'ArrowDown') {
            console.log('Enter')
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

}
