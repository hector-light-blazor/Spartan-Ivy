import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchiveTicketListRoutingModule } from './archive-ticket-list-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ArchiveTicketListComponent} from './archive-ticket-list.component';


@NgModule({
  imports: [
    CommonModule, ArchiveTicketListRoutingModule,
    SharedModule
  ],
  declarations: [ArchiveTicketListComponent]
})
export class ArchiveTicketListModule { }
