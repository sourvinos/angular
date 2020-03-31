import { Component, Inject } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'

@Component({
    selector: 'modal-form',
    templateUrl: 'modal-form.html',
    styleUrls: ['modal-form.css']
})

export class PostModalFormComponent {

    form = this.formBuilder.group({
        id: 0,
        userId: 0,
        title: ['', [Validators.required, Validators.maxLength(100)]],
        body: ['', [Validators.maxLength(255)]]
    })

    constructor(public dialogRef: MatDialogRef<PostModalFormComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder) {
        console.log('Inside modal, data from outside', data)
        // this.addShortcuts()
        this.populateFormFields(data)
    }

    close(): void {
        this.dialogRef.close()
    }

    closeAndReturnObject() { }

    private populateFormFields(data: any) {
        console.log('Will populate form with ', data.post)
        this.form.setValue({
            id: data.post.id,
            userId: data.post.userId,
            title: data.post.title,
            body: data.post.body
        })
    }

}
