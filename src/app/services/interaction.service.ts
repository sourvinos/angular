import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class IndexInteractionService {

    private messageSource = new Subject<string>()
    private array = new Subject<any[]>()

    data = this.messageSource.asObservable()
    dataArray = this.array.asObservable()

    sendObject(data: any) {
        this.messageSource.next(data)
    }

    sendArray(data) {
        this.array.next(data)
        console.log('Data received', data)
    }

}
