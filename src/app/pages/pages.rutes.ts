import { RouterModule, Routes } from "@angular/router";

import { PagesComponent } from "./pages.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from './login/login.component';


const pagesRoutes: Routes = [
    {
      path: "",
      component: PagesComponent,
      children: [
        { path: "home", component: HomeComponent },
        { path: "", redirectTo: "home", pathMatch: "full" },
        { path: "login", component: LoginComponent}
      ],
    },
  ];
  export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);