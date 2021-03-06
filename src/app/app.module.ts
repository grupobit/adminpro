import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Rutas
import { APP_ROUTES } from './app.routes'; 


// Modulos
import { PagesModule } from './pages/pages.module';
  // Importamos el archivo pages.module.ts donde se declaro DashboardComponent, ProgressComponent, Graficas1Component, PagesComponent
import { SharedModule } from './shared/shared.module';
// Importamos el archivo pages.module.ts donde se declaro DashboardComponent, ProgressComponent, Graficas1Component


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// Temporal
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Servicios
import { ServiceModule } from './services/service.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
