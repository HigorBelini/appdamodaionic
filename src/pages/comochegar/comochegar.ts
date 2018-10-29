import {
  GoogleMaps,
  GoogleMap,
  Environment,
  Marker,
  GoogleMapsEvent,
  GoogleMapOptions,
  MyLocationOptions,
  LocationService,
  MyLocation
} from '@ionic-native/google-maps';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the ComochegarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comochegar',
  templateUrl: 'comochegar.html',
})
export class ComochegarPage {
  public loader;
  map:GoogleMap;
  carregar() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando...",
    });
    this.loader.present();
  }

  fechacarregar(){
    this.loader.dismiss();
  }

  //ionic cordova plugin add https://github.com/mapsplugin/cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="AIzaSyBabdCU6NbXGT8Ld2VeuyFgtU181O9Syfw" --variable API_KEY_FOR_IOS="AIzaSyBabdCU6NbXGT8Ld2VeuyFgtU181O9Syfw"
  //ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="AIzaSyBabdCU6NbXGT8Ld2VeuyFgtU181O9Syfw" --variable API_KEY_FOR_IOS="AIzaSyBabdCU6NbXGT8Ld2VeuyFgtU181O9Syfw"
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private googleMaps: GoogleMaps) {
  }

  loadMap() {

    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBabdCU6NbXGT8Ld2VeuyFgtU181O9Syfw',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBabdCU6NbXGT8Ld2VeuyFgtU181O9Syfw'
    });

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
            lat: -20.727671,
            lng: -46.6111575
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
        lat: -20.727671,
        lng: -46.6111575
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });


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
    };

    /*LocationService.getMyLocation(option).then((location: MyLocation) => {
      this.map = GoogleMaps.create({
        'camera': location.latLng,
        'zoom': 16
      });
    }).catch((error:any) => {
      console.log(error);
    });*/
    
  }

  ionViewDidEnter() {
    this.carregar();
    console.log('ionViewDidLoad ComochegarPage');
    this.loadMap();
    this.fechacarregar();
  }

}
