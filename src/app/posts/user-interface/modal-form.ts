import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'modal-form',
    templateUrl: 'modal-form.html',
    styleUrls: ['modal-form.css']
})

export class PostModalForm {

    form = this.formBuilder.group({
        id: 0,
        userId: 0,
        title: ['', [Validators.required, Validators.maxLength(100)]],
        body: ['', [Validators.maxLength(255)]]
    })

    constructor(public dialogRef: MatDialogRef<PostModalForm>, @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder) {
        this.form.setValue({
            id: this.data.post.id,
            userId: this.data.post.userId,
            title: this.data.post.title,
            body: this.data.post.body
        })

    }

    close(): void {
        this.dialogRef.close();
    }

    closeAndReturnObject() {
        this.dialogRef.close(this.form.value)
    }

}
