import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextMaskModule } from 'angular2-text-mask';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MasterLoadingComponent } from '../UI/master-loading/master-loading.component';
import { FilterminePipe } from '../filtermine.pipe';
import { TicketWorkflowComponent } from '../UI/ticket-workflow/ticket-workflow.component';
import { FormsModule } from '@angular/forms';
import { IdentifyListComponent } from '../UI/identify-list/identify-list.component';
import { FileUploaderComponent } from '../UI/file-uploader/file-uploader.component';
import { FileViewerComponent } from '../UI/file-viewer/file-viewer.component';
import { EsriMapComponent } from '../UI/esri-map/esri-map.component';
import { FullScreenPickComponent } from '../UI/full-screen-pick/full-screen-pick.component';
import { QuickPickToolsComponent } from '../UI/quick-pick-tools/quick-pick-tools.component';
import { GoogleMapComponent } from '../UI/google-map/google-map.component';
import { DatatablePipe } from '../datatable.pipe';
import { UppercaseDirective } from '../uppercase.directive';
import { LogsDirective } from '../logs.directive';
import { LeafletMapComponent } from '../UI/leaflet-map/leaflet-map.component';
import { KeysPipe } from '../keys.pipe';
import { LetterViewerComponent } from '../UI/letter-viewer/letter-viewer.component';
import { InfomartionComponent } from '../UI/infomartion/infomartion.component';
import {DisplayXYComponent} from '../Pages/main-map/components/display-xy/display-xy.component';

@NgModule({
  imports: [

    CommonModule,
    FormsModule,
    TextMaskModule,
    NgxDatatableModule
  ],
  providers: [],
  declarations: [MasterLoadingComponent,
    KeysPipe,
    DisplayXYComponent,
    IdentifyListComponent,
    TicketWorkflowComponent,
    FileUploaderComponent,
    FileViewerComponent,
    QuickPickToolsComponent,
    FullScreenPickComponent,
    EsriMapComponent,
    LeafletMapComponent,
    LetterViewerComponent,
    InfomartionComponent,
    GoogleMapComponent,
    FilterminePipe, DatatablePipe, UppercaseDirective, LogsDirective],
  exports:
    [MasterLoadingComponent, FormsModule, DisplayXYComponent, TextMaskModule,
      NgxDatatableModule, TicketWorkflowComponent, IdentifyListComponent,
      InfomartionComponent, FileUploaderComponent, EsriMapComponent,LeafletMapComponent, GoogleMapComponent,
    FileViewerComponent,QuickPickToolsComponent ,FullScreenPickComponent,LetterViewerComponent,KeysPipe, FilterminePipe, DatatablePipe, UppercaseDirective, LogsDirective]
})
export class SharedModule { }
