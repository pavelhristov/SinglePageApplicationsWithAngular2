import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'filterTitle'
})
export class FilterTitlePipe implements PipeTransform {
    transform(items: any[], pattern: string): any[] {
        return items.filter(x => {
            return x['Title'].indexOf(pattern) >= 0;
        });
    }
}
