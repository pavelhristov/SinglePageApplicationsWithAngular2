import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {
    transform(items: any[], sortBy?: string): any[] {
        return items.sort((x, y) => {
            if (x[sortBy] > y[sortBy]) {
                return 1;
            }
            if (x[sortBy] < y[sortBy]) {
                return -1;
            }
            return 0;
        });
    }
};
