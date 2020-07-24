import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainMapComponent} from './main-map.component';


const routes: Routes = [{path: '', component: MainMapComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainMapRoutingModule { }
