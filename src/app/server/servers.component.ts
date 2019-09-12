import { Component } from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: 'servers.component.html',
    styleUrls: ['servers.component.css']
})

export class ServersComponent {

    servers: string[] = []
    allowNewServer: boolean = false
    serverCreationStatus: string = ''
    serverName: string = ''

    constructor() { }

    onCreateServer() {
        this.servers.push(this.serverName)
        this.serverCreationStatus = 'Server ' + this.serverName + ' was created'
        this.serverName = ''
        this.allowNewServer = false
    }

    onUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value
        this.allowNewServer = this.serverName != ''
    }

}