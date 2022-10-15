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
  constructor(private router: Router,
    private getData: WorldService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.name = {
      name: this.route.snapshot.params['name']
    }
    this.getCountries()
    
    this.route.params.subscribe(
      (params: Params) => {
        this.name.name = params['name'];
      }
    )
    
  }

  getCountries() {
    return this.getData.getCountryByName(this.name.name).subscribe((data) => {
      this.countries = data
      console.log(this.countries, "gimme data")
      for (let i = 0; i < this.countries.length; i++) {
        if (this.countries[i].cioc == this.name.name) {
          this.page = this.countries[i]
          if (this.page.borders) {
            this.getCountryCode(this.page.borders)
            console.log("if check borders")
          }
          
          console.log(this.page, "what's goin' on?")
        }
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


}
