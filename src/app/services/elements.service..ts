import { Injectable } from '@angular/core';
import { of } from "rxjs";
import { delay } from "rxjs/operators";
import { element } from '../models/element';

@Injectable({ providedIn: 'root' })

export class ElementsService {

    elements: element[] = [
        { name: 'H', atomicNumber: 1 },
        { name: 'Li', atomicNumber: 3 },
        { name: 'Na', atomicNumber: 11 },
        { name: 'K', atomicNumber: 19 },
        { name: 'Rb', atomicNumber: 37 },
        { name: 'Cs', atomicNumber: 55 },
        { name: 'Fr', atomicNumber: 87 },
        { name: 'Th', atomicNumber: 90 },
        { name: 'Pa', atomicNumber: 91 },
        { name: 'U', atomicNumber: 92 }
    ]

    getElements() {
        return of(this.elements).pipe(delay(0))
    }

}