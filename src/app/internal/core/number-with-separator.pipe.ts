import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numberwseparator'
})
export class NumberWithSeparatorPipe implements PipeTransform {

    transform(val: number): string {
        // Format the output to display any way you want here.
        // For instance:
        if (val !== undefined && val !== null) {
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        } else {
            return '';
        }
    }
}
