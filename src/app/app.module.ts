import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { ArchiveTicketListComponent } from './archive-ticket-list/archive-ticket-list.component';

import { EmailComponent } from './email/email.component';
import { AppService } from './app.service';
import { MapServiceService } from './map-service.service';
import {NativeNotificationService} from "angular-notice";

import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoginComponent,
    ArchiveTicketListComponent,
    EmailComponent,
    TestComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule

  ],
  providers: [AppService, MapServiceService, NativeNotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
