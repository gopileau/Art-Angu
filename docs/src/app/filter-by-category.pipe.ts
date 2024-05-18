import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCategory'
})
export class FilterByCategoryPipe implements PipeTransform {
  transform(artisans: any[], category: string): any[] {
    return artisans.filter(artisan => artisan.category === category);
  }
}
