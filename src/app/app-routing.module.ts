import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ArchiveTicketListComponent } from './archive-ticket-list/archive-ticket-list.component';
import { MainMapComponent } from './main-map/main-map.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'ticket/charts',
    loadChildren: () => import('./ticket-charts/ticket-charts.module').then(m => m.TicketChartsModule)///#TicketChartsModule'
  },
  {
    path: 'ticket/dashboard',
    loadChildren: () => import('./dashboard-tickets/dashboard-tickets.module').then(m => m.DashboardTicketsModule)
  },
  {
    path: 'ticket/filter',
    loadChildren: () => import('./ticket-data-table/ticket-data-table.module').then(m => m.TicketDataTableModule) //#TicketDataTableModule'
  },
  {
    path: 'ticket/new',
    loadChildren: () => import('./ticket/ticket.module').then(m => m.TicketModule) //#TicketModule'
  
  },
  {
    path: 'ticket/view/archives',
    component: ArchiveTicketListComponent
  },
  {
    path: 'ticket/view/:id',
    loadChildren: () => import('./ticket/ticket.module').then(m => m.TicketModule)//#TicketModule'
  },
  {
    path: 'ticket/calendar-view',
    loadChildren: () => import('./tck-calendar-view/tck-calendar-view.module').then(m => m.TckCalendarViewModule)//#TckCalendarViewModule'
  },
  
  {
    path: 'ticket/quickSearch/:search', 
    loadChildren: () => import('./quick-search/quick-search.module').then(m => m.QuickSearchModule) //#QuickSearchModule'
  },

  {
    path: 'nrf',
    loadChildren: () => import('./nrf/nrf.module').then(m => m.NrfModule)//#NrfModule'
  },
  {
    path: 'subdivision',
    loadChildren: () => import('./subdivision/subdivision.module').then(m => m.SubdivisionModule) //#SubdivisionModule'
  },
  {
    path: 'Map',
    loadChildren:() => import('./main-map/main-map.module') .then(m => m.MainMapModule) //MainMapComponent
  },
  {
    path: 'Settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) //#SettingsModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
