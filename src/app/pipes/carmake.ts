import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'carmake'})

export class CarMakePipe implements PipeTransform {
    transform(value, [carmake]): any {
        if (value) {
            return value.filter((item) => item.make === carmake);
        } else {
            return value;
        }
    }
}
