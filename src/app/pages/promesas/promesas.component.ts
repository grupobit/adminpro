import { Component, OnInit } from '@angular/core';
import { reject } from 'q';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() { 

    

    this.contarTres().then(
      mensajepromesa => console.log('Termino', mensajepromesa)
    )
    .catch(error => console.log('Error en la promesa', error));

  }

  

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {
    // Creamos una promesa que cuando pases tres segundos
    // va a llamar la funcion resolve()
    return new Promise( (resolve, reject) =>{

      let contador = 0;
      let intervalo = setInterval( ()=>{
        
        contador += 1;
        console.log(contador);
        if ( contador === 3 ) {
          resolve( true );
          clearInterval(intervalo);
        }

      }, 1000); 
    });
    
  }

}
