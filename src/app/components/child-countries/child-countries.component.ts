import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child-countries',
  templateUrl: './child-countries.component.html',
  styleUrls: ['./child-countries.component.css']
})
export class ChildCountriesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backPage() {
    this.router.navigate(['/world'])
  }

  
}
