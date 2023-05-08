import { HistoryModule } from './modules/history/history.module';
import { RouterModule } from '@angular/router';
import { HomeModule } from './modules/home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

import { HttpClientModule, HttpClient } from '@angular/common/http';

//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './modules/error404/page/error/error.component';
import { environment } from 'src/environments/environment.prod';





@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    HistoryModule,

  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.api }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
