import { RouterModule, Routes } from "@angular/router";

import { PagesComponent } from "./pages.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from './login/login.component';
import { PersonComponent } from './person/person.component';
import { ContainerServiciosComponent } from '../components/container-servicios/container-servicios.component';
import { CreateComponent } from "./reservas/create/create.component";
import { ListComponent } from "./reservas/list/list.component";
import { DetailsComponent } from "./reservas/details/details.component";
import { UpdateComponent } from "./reservas/update/update.component";


const pagesRoutes: Routes = [
    {
      path: "",
      component: PagesComponent,
      children: [
        { path: "home", component: HomeComponent },
        { path: "", redirectTo: "servicios", pathMatch: "full" },
        { path: "login", component: LoginComponent},
        { path: "servicios", component: ContainerServiciosComponent},
        { path: "person/form", component: PersonComponent },
        { path: 'person/form/:id', component: PersonComponent },
        { path: 'reservas/list', component: ListComponent },
        { path: 'reservas/create', component: CreateComponent },
        { path: 'reservas/detail/:id', component: DetailsComponent },
        { path: 'reservas/update/:id', component: UpdateComponent }
      ],
    },
  ];
  export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
