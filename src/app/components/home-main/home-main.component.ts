import { Component, OnInit } from '@angular/core';
import { WorldService } from 'src/app/services/world.service';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent implements OnInit {
  // name: any
  // tld: any
  // currencies: any
  // capital: any 
  // region: any
  // subRegion: any
  // languages: any 
  // fifa: any
  // borders: any
  // flag!: string;
  // population: any
  countries: any

  constructor(private getData: WorldService) { }

  ngOnInit(): void {
    this.getCountries()
  }

  getCountries() {
    return this.getData.getData().subscribe((data) => {
      this.countries = data
      console.log(this.countries, "gimme data")
    })
  }
  //Destructuring base 
  // const destructure = ({name, }) => {
  //   return 
  // }
  // dataRestructuring() {
  //   for (let countries of data) {
      
  //   }
  // }
}
