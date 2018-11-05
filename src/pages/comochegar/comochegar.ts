import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';

declare var google;

@IonicPage()
@Component({
  selector: 'page-comochegar',
  templateUrl: 'comochegar.html'
})
export class ComochegarPage {

  @ViewChild('map') mapElement: ElementRef;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  map: any;
  startPosition: any;
  originPosition: string;
  destinationPosition: string;

  constructor(public navCtrl: NavController,private googleMaps: GoogleMaps, private geolocation: Geolocation) {

  }

  ionViewDidLoad() {
    this.initializeMap();
  }
 
  initializeMap() {
    this.startPosition = new google.maps.LatLng(-20.7241656, -46.6127178);
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 16,
      center: {lat: -20.7241656, lng: -46.6127178}
    });

    this.directionsDisplay.setMap(this.map);
 
    const marker = new google.maps.Marker({
      position: this.startPosition,
      map: this.map,
    });
  }

  /*calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }*/

  posicaoAtual(){

        /*this.geolocation.getCurrentPosition().then((resp) => {
        const position = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
 
        const mapOptions = {
          zoom: 18,
          target: position,
          tilt: 30
        }
 
        this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
 
        const marker = new google.maps.Marker({
          position: position,
          map: this.map
        });

        //this.map.moveCamera(mapOptions);
 
      }).catch((error) => {
        console.log('Erro ao recuperar sua posição', error);
      });*/

      this.geolocation.getCurrentPosition()
      .then((resp) => {
        const position = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
 
        const mapOptions = {
          zoom: 18,
          center: position
        }
 
        this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
 
        const marker = new google.maps.Marker({
          position: position,
          map: this.map
        });
 
      }).catch((error) => {
        console.log('Erro ao recuperar sua posição', error);
      });


    /*this.geolocation.getCurrentPosition().then((resp) => {
     // resp.coords.latitude
     // resp.coords.longitude
     let element: HTMLElement = document.getElementById('map');
     let map: GoogleMap = this.googleMaps.create(element);

     let posicao: LatLng = new LatLng(resp.coords.latitude,resp.coords.longitude);

     // create CameraPosition
     let position = {
       target: posicao,
       zoom: 16,
       tilt: 30
     };

     // move the map's camera to position
     map.moveCamera(position);



    }).catch((error) => {
      alert("Erro " + error.message);
    });*/
  }

}