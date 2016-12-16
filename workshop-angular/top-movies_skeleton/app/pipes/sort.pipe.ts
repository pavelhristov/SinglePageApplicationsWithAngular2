import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {
    transform(items: any[], sortAndOrder: string[]): any[] {
        let sortBy = sortAndOrder[0];
        let orderBy = sortAndOrder[1];

        if (orderBy === 'Ascending') {
            return items.sort((x, y) => {
                if (x[sortBy] > y[sortBy]) {
                    return 1;
                }
                if (x[sortBy] < y[sortBy]) {
                    return -1;
                }
                return 0;
            });
        } else {
            return items.sort((x, y) => {
                if (x[sortBy] > y[sortBy]) {
                    return -1;
                }
                if (x[sortBy] < y[sortBy]) {
                    return 1;
                }
                return 0;
            });
        }
    }
};
