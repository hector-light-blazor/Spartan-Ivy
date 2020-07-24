import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainMapRoutingModule } from './main-map-routing.module';
import { MainMapComponent } from './main-map.component';
import {GoogleMap2Component} from '../../UI/google-map2/google-map2.component';
import {QuickPickListComponent} from '../../UI/quick-pick-list/quick-pick-list.component';
import {BasemapComponent} from '../../UI/basemap/basemap.component';
import {SearchAddressComponent} from '../../UI/search-address/search-address.component';
import {NguiAutoCompleteModule} from '@ngui/auto-complete';
import {BookmarkComponent} from '../../UI/bookmark/bookmark.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule, NguiAutoCompleteModule, MainMapRoutingModule,
    SharedModule
  ],
  declarations: [MainMapComponent,
    BookmarkComponent,
     GoogleMap2Component,
    QuickPickListComponent, SearchAddressComponent,
    BasemapComponent]
})
export class MainMapModule { }
