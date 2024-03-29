import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DashboardTicketsComponent } from './dashboard-tickets.component';
import { DashboardTicketsRoutingModule } from './dashboard-tickets-routing.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [

    CommonModule,
    DashboardTicketsRoutingModule,
    SharedModule
  ],
  declarations: [DashboardTicketsComponent]
})
export class DashboardTicketsModule { }
