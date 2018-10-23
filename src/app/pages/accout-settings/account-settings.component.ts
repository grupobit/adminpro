import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _ajustes: SettingService ) { }
  // Con este metodo  @Inject(DOCUMENT) private _document tenemos acceso al DOM

  ngOnInit() {
    this.colocalCheck();
  }

  cambiarColor(tema: string, link: any){

    this.aplicarCheck( link );
    this._ajustes.aplicarTema( tema );
    

  }

  aplicarCheck( link: any ){

    let selectores: any = document.getElementsByClassName('selector');
    for (let ref of selectores) {
      // remover cuelquier clase con elnombre working
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  colocalCheck(){

    let selectores: any = document.getElementsByClassName('selector');
    let tema = this._ajustes.ajustes.tema;
    for ( let ref of selectores ) {
      if ( ref.getAttribute('data-theme') === tema ) {
        ref.classList.add('working');
        break;
      }
    } 
  }
}
