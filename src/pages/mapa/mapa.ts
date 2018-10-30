import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions,
  Environment,
  GoogleMapsEvent,
  Marker,
  LocationService,
  MyLocation,
  LatLng,
  CameraPosition
} from '@ionic-native/google-maps';

import { IListaEmpresas } from '../../interfaces/IListaEmpresas';
import { LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private googleMaps: GoogleMaps, private geolocation: Geolocation) {
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

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
            lat: -20.7276478,
            lng: -46.611137
         },
         zoom: 14,
         tilt: 40
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: 'Avenida da Moda',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: -20.7276478,
        lng: -46.611137
      }
    });
      marker.showInfoWindow();

    /*LocationService.getMyLocation().then((myLocation: MyLocation) => {

      let options: GoogleMapOptions = {
        icon: 'blue',
        camera: {
          target: myLocation.latLng,
          zoom: 30
        }
      };
      this.map = GoogleMaps.create('map_canvas', options);

    });*/

    /*let marker: Marker = this.map.addMarkerSync({
      title: 'Avenida da Moda',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat: -20.727671,
        lng: -46.6111575
      }
    });
     marker.showInfoWindow();

    let option: MyLocationOptions = {
      enableHighAccuracy: true;
    };*/
    
  }
  data:string = '';
  posicaoAtual(){

    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
     let posicao: LatLng = new LatLng(resp.coords.latitude, resp.coords.longitude);
     console.log(posicao);

     /*let position = {
      target: posicao,
      zoom:14,
      tilt: 30
     };

     this.map = GoogleMaps.create('map_canvas', position);*/

     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     /*let watch = this.geolocation.watchPosition();
     watch.subscribe((pos) => {
      console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
     });*/

  }

}
