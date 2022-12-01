import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.page.html',
  styleUrls: ['./map-view.page.scss'],
})
export class MapViewPage implements OnInit {
  @ViewChild(google.maps.Map, { static: false }) map!: google.maps.Map
  @ViewChild(MapInfoWindow, { static: false }) info!: MapInfoWindow

  markers = [] as any;
  zoom = 12;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true
  };

  constructor(private api_service: ApiService) { }

  ngOnInit() {
    this.api_service.get_all_properties().subscribe((response) => {
      console.log(response.body.properties);
      this.center = {
        lat: response.body.properties[0].GPS_lat_lng.lat,
        lng: response.body.properties[0].GPS_lat_lng.lng
      };

      for(let i=0; i<response.body.count; i++){
        this.addMarker(response.body.properties[i]);
      }
    },
    (error)=>{
      console.log(error);
    });
  }


  addMarker(info: any){
    this.markers.push({
      position: {
        lat: info.GPS_lat_lng.lat,
        lng: info.GPS_lat_lng.lng
      },
      options: { animation: google.maps.Animation.BOUNCE },
      info:
      {
        info
      }
    });
  }

}
