import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PAGES_ROUTES } from './pages/pages.rutes';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';

//OCALERO
import { propertiesLps, APP_CONFIG } from './../properties/properties.lps';

// Firebase
import { firebaseConfig } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    PagesModule,
    //ComponentsModule,
    PAGES_ROUTES,
    AngularFireModule.initializeApp(firebaseConfig), //Modulo 1 a importa
    AngularFireAuthModule // Modulo 2 a importar

  ],
  providers: [
    //OCALERO
    { provide: APP_CONFIG, useValue: propertiesLps }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
