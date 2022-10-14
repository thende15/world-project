import { Pipe, PipeTransform } from '@angular/core';
import { CountriesInterface } from '../interfaces/countries-interface';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(countries: CountriesInterface[], filterContent: string, name: string): CountriesInterface[] {
    if (!filterContent) {
      return countries;
    }
    let filteredContent: CountriesInterface[] = [];
    for (let country of countries) {
      if (country.name.official.toLowerCase().includes(filterContent.toLowerCase())) {
        filteredContent.push(country);
      }
    }
    return filteredContent;
  }

}
