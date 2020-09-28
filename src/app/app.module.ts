import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { PAGES_ROUTES } from "./pages/pages.rutes";

import { AppComponent } from './app.component';
import { ComponentsModule } from "./components/components.module";

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from "./pages/pages.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
  
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    ComponentsModule,
    PAGES_ROUTES,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
