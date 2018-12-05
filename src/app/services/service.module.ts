import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Servicios
import { SettingService, SidebarService, SharedService, UsuarioService, LoginGuardGuard } from './service.index';
import { SubirArchivoService } from './service.index';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';

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
    LoginGuardGuard,
    SubirArchivoService,
    ModalUploadService
  ],
  declarations: [
  ]
})
export class ServiceModule { }
