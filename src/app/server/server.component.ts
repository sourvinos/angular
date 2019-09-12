import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: 'server.component.html',
    styleUrls: ['server.component.css']
})

export class ServerComponent {
    serverId: string = '10'
    serverStatus: string = Math.random() > 0.5 ? 'offline' : 'online'
}