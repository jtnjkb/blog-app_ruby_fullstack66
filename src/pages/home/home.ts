import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BlogProvider } from '../../providers/blog/blog';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  articulos : any[];

  constructor(
    public navCtrl: NavController,
    private servicioBlog: BlogProvider) {

  }
  ionViewDidLoad(){
    this.servicioBlog.obtenerArticulos().subscribe(
      (datos: any[]) =>
      {
        //this.articulos = datos.datos;
      }
    );
  }
  agregarArticulo(){
    console.log("crear articulo")
    this.servicioBlog.
  }
}
