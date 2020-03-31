import { Component, Inject, OnInit, AfterViewInit, OnDestroy } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { IndexInteractionService } from 'src/app/services/interaction.service'

@Component({
    selector: 'index-dialog',
    templateUrl: './index-dialog.component.html',
    styleUrls: ['./index-dialog.component.css']
})

export class IndexDialogComponent implements OnInit, AfterViewInit, OnDestroy {

    title: string

    fields: any[]
    headers: any[]
    justify: any[]
    visibility: any[]
    widths: any[]

    selectedRecord: any
    records: any[]

    ngUnsubscribe = new Subject<void>()

    // selectedRecord: any

    // @Output() selectEvent = new EventEmitter()

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private indexInteractionService: IndexInteractionService) {
        this.title = data.title
        this.fields = data.fields
        this.headers = data.headers
        this.justify = data.justify
        this.visibility = data.visibility
        this.widths = data.widths
        this.records = data.records
    }

    ngOnInit() {
        this.subscribeToIndexInderactionService()
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.calculateDimensions()
        }, 100)
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next()
        this.ngUnsubscribe.unsubscribe()
    }

    private calculateDimensions() {
        document.getElementById('index-dialog-footer').style.paddingRight =
            document.getElementById('index-dialog').offsetWidth -
            document.getElementById('index-table').offsetWidth - 20 + 'px'
    }

    private subscribeToIndexInderactionService() {
        this.indexInteractionService.data.pipe(takeUntil(this.ngUnsubscribe)).subscribe(response => {
            this.selectedRecord = response
        })
    }

}
