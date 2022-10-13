import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildCountriesComponent } from './components/child-countries/child-countries.component';
import { HomeMainComponent } from './components/home-main/home-main.component';

const routes: Routes = [
  {path: '', redirectTo: '/world', pathMatch: 'full'}, 
  {path: 'world', component: HomeMainComponent}, 
  {path: ':name', component: ChildCountriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
