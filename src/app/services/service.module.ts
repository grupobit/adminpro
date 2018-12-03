import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Servicios
import { SettingService, SidebarService, SharedService, UsuarioService, LoginGuardGuard } from './service.index';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingService, 
    SidebarService, 
    SharedService,
    UsuarioService,
    LoginGuardGuard
  ],
  declarations: [
  ]
})
export class ServiceModule { }
