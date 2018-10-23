import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Servicios
import { SettingService, SidebarService, SharedService } from './service.index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SettingService, 
    SidebarService, 
    SharedService],
  declarations: []
})
export class ServiceModule { }
