import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';

import { map } from 'rxjs/Operators';
import { Router } from '@angular/router';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // Propiedades
  usuario: Usuario;
  token: string;

  constructor( 
    public http: HttpClient,
    public router: Router,
    public _subirArchivoService: SubirArchivoService
    ){
      this.cargarStorage();
   }

   estaLogueado() {
    return ( this.token.length > 5 ) ? true : false;
   }

   cargarStorage(){

    if ( localStorage.getItem('token') ) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse( localStorage.getItem('usuario') );
    } else{
      this.token = '';
      this.usuario = null;
    }

  }

   guardarStorage( id: string, token: string, usuario: Usuario ) {

      localStorage.setItem( 'id', id );
      localStorage.setItem( 'token', token );
      localStorage.setItem( 'usuario',  JSON.stringify( id ));

      this.usuario = usuario;
      this.token = token;
   }

   logout() {
      this.usuario = null;
      this.token = '';
      localStorage.removeItem('token');
      localStorage.removeItem('usuario');
      // Router
      this.router.navigate(['/login']);
   }

   loginGoogle( token: string ){
    let url = URL_SERVICIOS + '/login/google';
    return this.http.post( url, {token} )
                .pipe(map((resp: any) =>{
                  this.guardarStorage( resp.id, resp.token, resp.usuario );
                  return true;
                }));
   }

   login( usuario: Usuario, recordar: boolean = false ) {

     // Guardar el correo en el localstorage 
     if (recordar) {
      localStorage.setItem('email', usuario.email);
     }else{
      localStorage.removeItem('email');
     }

      let url = URL_SERVICIOS + '/login';
      return this.http.post( url, usuario )
                 .pipe(map( (resp: any) => {

                  this.guardarStorage( resp.id, resp.token, resp.usuario );
                  return true;
      }));
 
   }

   // Esta metodo lo usamos para crear un usuario cuendo se registran
   crearUsuario( usuario:Usuario){

      let url = URL_SERVICIOS + '/usuario'; 

      return this.http.post( url, usuario )
        .pipe(map((resp:any) => {
          swal('Usuario creado', usuario.email, 'success');
          console.log(resp);
          return resp.usuario;
        }));
   }

   actualizarUsuario( usuario: Usuario ) {

      let url = URL_SERVICIOS + '/usuario/' + usuario._id + '?token=' + this.token;
      console.log(url);
      return this.http.put( url, usuario )
                      .pipe(map((resp: any) => {
                        if (usuario._id === this.usuario._id) {
                          
                            let usuarioDB: Usuario = resp.usuario;                        
                            this.guardarStorage( usuarioDB._id, this.token, usuarioDB );
                        }
                        
                        swal('Usuario actualizado', usuario.nombre, 'success');
                        return true;
                      }));

   }

   cambiarImagen( archivo: File, id:string ) {

      this._subirArchivoService.subirArchivo( archivo, 'usuarios', id )
        .then( (resp: any) => {
          this.usuario.img = resp.usuario.img;
          console.log(this.usuario.img);
          swal('Imagen Actualizada', this.usuario.nombre, 'success');
          this.guardarStorage(id, this.token, this.usuario);
        })
        .catch( resp => {
          console.log(resp);
        });
   }

   cargarUsuarios(desde: number = 0) {

    let url = URL_SERVICIOS + '/usuario?desde=' + desde;
    return this.http.get( url );
   }

   buscarUsuarios( termino: string){

     let url = URL_SERVICIOS + '/busqueda/coleccion/usuarios/' + termino;
     return this.http.get( url )
        .pipe(map((resp: any) => resp.usuarios));
   }

   borrarUsuario( id: string ) {

    let url = URL_SERVICIOS + '/usuario/' + id + '?token=' + this.token;
    return this.http.delete(url)
          .pipe(map(resp => {
            swal('Usuario borrado', 'El usuario a sido aliminado correctamente', 'success');
            return true;
          }));
   }
}
