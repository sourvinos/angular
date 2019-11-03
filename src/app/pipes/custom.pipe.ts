import { PipeTransform, Pipe } from '@angular/core';
import * as moment from 'moment'

@Pipe({ name: 'custom' })

export class CustomPipe implements PipeTransform {
    transform(value: any, format: any) {
        if (format == 'date') {
            console.log('Valid', moment(value).isValid())
            console.log(moment(value, 'DD/MM/YYYY'))
            return moment(value, "YYYY")
        }
        else {
            return value
        }
    }
}