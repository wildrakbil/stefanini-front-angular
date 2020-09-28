import { RouterModule, Routes } from "@angular/router";

import { PagesComponent } from "./pages.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from './login/login.component';
import { PersonComponent } from './person/person.component';


const pagesRoutes: Routes = [
    {
      path: "",
      component: PagesComponent,
      children: [
        { path: "home", component: HomeComponent },
        { path: "", redirectTo: "home", pathMatch: "full" },
        { path: "login", component: LoginComponent},
        { path: "person/form", component: PersonComponent },
        { path: 'person/form/:id', component: PersonComponent }
      ],
    },
  ];
  export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);