import { Component, OnInit } from '@angular/core';


// Declaramos el plugins custom.js 
declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Ejecutamos init_plugins para que cargue todos los plugins en el archivo custom.js al inicio del componente 
    init_plugins();
  }

}
