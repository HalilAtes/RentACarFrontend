import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  {path : "", pathMatch:"full", component:CarComponent},
  {path : "cars" , component:CarComponent},
  {path : "brands/brand/:brandId" , component:CarComponent},
  {path : "colors/color/:colorId" , component:CarComponent},
  // {path : "rentals/rental/:Id" , component:CarComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
