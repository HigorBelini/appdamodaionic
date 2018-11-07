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
  originPosition: any;
  destinationPosition: string = '-20.7241656, -46.6127178';
  zoomControl: boolean;
  mapTypeControl: boolean;
  scaleControl: boolean;
  streetViewControl: boolean;
  rotateControl: boolean;
  fullscreenControl: boolean;

  constructor(public navCtrl: NavController, private googleMaps: GoogleMaps, private geolocation: Geolocation) {

  }

  ionViewDidLoad() {
    this.initializeMap();
  }

  initializeMap() {
    this.startPosition = new google.maps.LatLng(-20.7241656, -46.6127178);
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      title: 'Avenida da Moda',
      zoom: 16,
      mapTypeControl: true,
      scaleControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      },
      center: { lat: -20.7241656, lng: -46.6127178 },
      styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ebe3cd"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#523735"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f1e6"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#c9b2a6"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#dcd2be"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#ae9e90"
            }
          ]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#93817c"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#a5b076"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#447530"
            }
          ]
        },
        {
          "featureType": "poi.sports_complex",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#aeae00"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f1e6"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#fdfcf8"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f8c967"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e98d58"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#db8555"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#806b63"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#8f7d77"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#ebe3cd"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#92f5e9"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#92998d"
            }
          ]
        }
      ]
    });

    this.directionsDisplay.setMap(this.map);

    const marker = new google.maps.Marker({
      animation: 'DROP',
      position: this.startPosition,
      map: this.map,
    });
  }

  calculateRouteByCar() {
      if (this.destinationPosition) {
        this.geolocation.getCurrentPosition().then((resp) => {
          const lat = resp.coords.latitude;
          const lng = resp.coords.longitude;
          const teste = lat + ' ' + lng;
          console.log(teste);
          const request = {
            // Pode ser uma coordenada (LatLng), uma string ou um lugar
            origin: lat + " " + lng,
            destination: this.destinationPosition,
            travelMode: 'DRIVING'
          };
      
          this.traceRoute(this.directionsService, this.directionsDisplay, request);
          this.directionsDisplay.setPanel(document.getElementById("trajeto-texto"));
          //console.log(teste);
        }).catch((error) => {
          console.log('Erro ao recuperar sua posição', error);
        });
        
    }
      
    /*traceRoute(service: any, display: any, request: any) {
      service.route(request, function (result, status) {
        if (status == 'OK') {
          display.setDirections(result);
        }
      });*/
  }

  calculateRouteByFoot() {
    if (this.destinationPosition) {
      this.geolocation.getCurrentPosition().then((resp) => {
        const lat = resp.coords.latitude;
        const lng = resp.coords.longitude;
        const teste = lat + ' ' + lng;
        console.log(teste);
        const request = {
          // Pode ser uma coordenada (LatLng), uma string ou um lugar
          origin: lat + " " + lng,
          destination: this.destinationPosition,
          travelMode: 'WALKING'
        };
    
        this.traceRoute(this.directionsService, this.directionsDisplay, request);
        this.directionsDisplay.setPanel(document.getElementById("trajeto-texto"));
        //console.log(teste);
      }).catch((error) => {
        console.log('Erro ao recuperar sua posição', error);
      });
      
  }
    
  /*traceRoute(service: any, display: any, request: any) {
    service.route(request, function (result, status) {
      if (status == 'OK') {
        display.setDirections(result);
      }
    });*/
}

traceRoute(service: any, display: any, request: any) {
  service.route(request, function (result, status) {
    if (status == 'OK') {
      display.setDirections(result);
    }
  });
}

}

