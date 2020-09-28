import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AlertModule } from 'ngx-alerts';

import { PagesComponent } from "./pages.component";
import { CommonModule } from "@angular/common";

import { ComponentsModule } from "../components/components.module";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [PagesComponent,HomeComponent, LoginComponent],
    imports: [
      CommonModule,
      ComponentsModule,
      FormsModule,
      RouterModule,
      AlertModule.forRoot({ maxMessages: 5, timeout: 5000 })
    ],
  })
  export class PagesModule {}