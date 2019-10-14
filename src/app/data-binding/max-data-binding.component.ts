import { Component } from '@angular/core'

@Component({
    selector: 'max-data-binding',
    templateUrl: './max-data-binding.component.html',
    styleUrls: ['./max-data-binding.component.css']
})

export class MaxDataBindingComponent {

    serverElements = [{ type: 'server', name: 'Main server #1', content: 'Content of main server #1' }]

    onServerAdded(serverData: { serverType: string, serverName: string, serverContent: string }) {
        this.serverElements.push({
            type: 'server',
            name: serverData.serverName,
            content: serverData.serverName
        })
    }

    onBlueprintAdded(blueprintData: { serverType: string, serverName: string, serverContent: string }) {
        this.serverElements.push({
            type: 'blueprint',
            name: blueprintData.serverName,
            content: blueprintData.serverName
        })

    }

}
