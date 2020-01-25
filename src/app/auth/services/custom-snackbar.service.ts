import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({ providedIn: 'root' })

export class CustomSnackbarService {

    constructor(public snackBar: MatSnackBar, private zone: NgZone) { }

    public open(message: string, action = 'success', duration = 4000) {
        this.zone.run(() => {
            this.snackBar.open(message, action, { duration });
        })
    }

}