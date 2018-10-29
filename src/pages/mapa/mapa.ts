import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions,
  Environment
} from '@ionic-native/google-maps';

import { IListaEmpresas } from '../../interfaces/IListaEmpresas';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  map:GoogleMap;

  itens:IListaEmpresas;
  public loader;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private googleMaps: GoogleMaps) {
    this.itens = this.navParams.get('dados');
  }

  carregar(){
    this.loader = this.loadingCtrl.create({
      content: "Carregando localização...",
    }); 
    this.loader.present();
  }

  fechacarregar(){
    this.loader.dismiss();
  }

  ionViewDidEnter() {
    this.carregar();
    console.log('ionViewDidEnter MapaPage');
    this.loadMap();
    this.fechacarregar();
  }

  loadMap() {

    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBabdCU6NbXGT8Ld2VeuyFgtU181O9Syfw',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBabdCU6NbXGT8Ld2VeuyFgtU181O9Syfw'
    });

    /*let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 43.0741904,
           lng: -89.3809802
         },
         zoom: 18,
         tilt: 30
       }
    };*/

    this.map = GoogleMaps.create('map_canvas'/*, mapOptions*/);

    /*let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 43.0741904,
        lng: -89.3809802
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });*/
  }

}
