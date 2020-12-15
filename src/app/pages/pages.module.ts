import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertModule } from 'ngx-alerts';

import { PagesComponent } from './pages.component';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PersonComponent } from './person/person.component';
import { ListComponent } from './reservas/list/list.component';
import { DetailsComponent } from './reservas/details/details.component';
import { CreateComponent } from './reservas/create/create.component';
import { UpdateComponent } from './reservas/update/update.component';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    LoginComponent,
    PersonComponent,
    ListComponent,
    DetailsComponent,
    CreateComponent,
    UpdateComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    RouterModule,
    AlertModule.forRoot({ maxMessages: 5, timeout: 5000 }),
  ],
})
export class PagesModule {}
