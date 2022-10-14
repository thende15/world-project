import { Pipe, PipeTransform } from '@angular/core';
import { CountriesInterface } from '../interfaces/countries-interface'

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {
  
  transform(countries: CountriesInterface[], filterRegion: string, region: string): CountriesInterface[] {
    if (!filterRegion || filterRegion == 'All') {
      return countries;
    }
    let filteredContent: CountriesInterface[] = [];
    for (let country of countries) {
      if (country.region.toLowerCase().includes(filterRegion.toLowerCase())) {
        filteredContent.push(country);
      }
    }
    return filteredContent;
  }

}
