import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { ToolbarComponent } from './UI/toolbar/toolbar.component';
import { LoginComponent } from './Pages/login/login.component';

import { EmailComponent } from './UI/email/email.component';
import { AppService } from './app.service';
import { MapServiceService } from './map-service.service';
import {NativeNotificationService} from "angular-notice";

import { TestComponent } from './test/test.component';

import { ClickStopPropagationDirective } from './Directives/click-stop-propagation.directive';
import { DashLoaderDirective } from './Directives/dash-loader.directive';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoginComponent,
    EmailComponent,
    TestComponent,
    ClickStopPropagationDirective,
    DashLoaderDirective,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    
  ],
  providers: [AppService, MapServiceService, NativeNotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
