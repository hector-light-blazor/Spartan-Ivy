import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArchiveTicketListComponent} from './archive-ticket-list.component';



const routes: Routes = [{path: '', component: ArchiveTicketListComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchiveTicketListRoutingModule { }
