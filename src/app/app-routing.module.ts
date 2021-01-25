import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardTicketsComponent } from './Pages/dashboard-tickets/dashboard-tickets.component';
import { LoginComponent } from './Pages/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardTicketsComponent
  },
  {
    path: 'ticket/charts',
    loadChildren: () => import('./Pages/ticket-charts/ticket-charts.module').then(m => m.TicketChartsModule)
  },
  {
    path: 'ticket/dashboard',
    loadChildren: () => import('./Pages/dashboard-tickets/dashboard-tickets.module').then(m => m.DashboardTicketsModule)
  },
  {
    path: 'ticket/filter',
    loadChildren: () => import('./Pages/ticket-data-table/ticket-data-table.module').then(m => m.TicketDataTableModule)
    // #TicketDataTableModule'
  },
  {
    path: 'ticket/new',
    loadChildren: () => import('./Pages/ticket/ticket.module').then(m => m.TicketModule)
    // #TicketModule'
  },
  {
    path: 'ticket/view/archives',
    loadChildren: () => import('./Pages/archive-ticket-list/archive-ticket-list.module').then(m => m.ArchiveTicketListModule)
  },
  {
    path: 'ticket/view/:id',
    loadChildren: () => import('./Pages/ticket/ticket.module').then(m => m.TicketModule)
    // #TicketModule'
  },
  {
    path: 'ticket/calendar-view',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('./Pages/tck-calendar-view/tck-calendar-view.module').then(m => m.TckCalendarViewModule)// #TckCalendarViewModule'
  },

  {
    path: 'ticket/quickSearch/:search',
    loadChildren: () => import('./Pages/quick-search/quick-search.module').then(m => m.QuickSearchModule) // #QuickSearchModule'
  },

  {
    path: 'nrf',
    loadChildren: () => import('./Pages/nrf/nrf.module').then(m => m.NrfModule)// #NrfModule'
  },
  {
    path: 'subdivision',
    loadChildren: () => import('./Pages/subdivision/subdivision.module').then(m => m.SubdivisionModule) // #SubdivisionModule'
  },
  {
    path: 'Map',
    loadChildren: () => import('./Pages/main-map/main-map.module') .then(m => m.MainMapModule) // MainMapComponent
  },
  {
    path: 'Settings',
    loadChildren: () => import('./Pages/settings/settings.module').then(m => m.SettingsModule) // #SettingsModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
