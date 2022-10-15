import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { WorldService } from 'src/app/services/world.service';

@Component({
  selector: 'app-child-countries',
  templateUrl: './child-countries.component.html',
  styleUrls: ['./child-countries.component.css']
})
export class ChildCountriesComponent implements OnInit {
  name: any;
  countries: any;
  page: any;
  something: any
  money: any;
  constructor(private router: Router,
    private getData: WorldService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.name = {
      name: this.route.snapshot.params['name']
    }
    console.log(this.name.name, "name consolelog")
    
    
    this.route.params.subscribe(
      (params: Params) => {
        this.name.name = params['name'];
        this.getCountries();
      }
    )

    
  }

  getCountries() {
    return this.getData.getCountryByName(this.name.name).subscribe((data: any) => {
      this.page = data[0]
      console.log(this.countries, "gimme data")
      if (this.page.borders) {
        this.getCountryCode(this.page.borders)
        console.log("if check borders")
      }
    })
  }
  getCountryCode(field:any) {
    return this.getData.getCountryCode(field).subscribe((data) => {
      this.something = data
      console.log(this.something)
    })
  }


  backPage() {
    this.router.navigate(['/world'])
  }

  // borderNav() {
  //   this.router.navigate(['/world', this.something.name.official])
  // }

}
