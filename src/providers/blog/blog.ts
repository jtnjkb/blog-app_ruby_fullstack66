import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BlogProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BlogProvider {
  api = 'http://localhost:3000/api/v1/articulos';

  constructor(public http: HttpClient) {
    console.log('Hello BlogProvider Provider');
  }
  crearArticulo(articulo){
    this.http.post(this.api,articulo)

  }

  obtenerArticulos(){
    return this.http.get(this.api)
    

  }
  obtenerArticulosPorId(id){
    
  }
  actualizarArticulo(id){
    
  }
  eliminarArticulos(id){
    
  }

}
