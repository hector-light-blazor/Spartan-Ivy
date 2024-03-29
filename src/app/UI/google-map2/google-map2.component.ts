import { Component, OnInit, Output, Input, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import {} from "googlemaps";
import { AppService } from '../../app.service';
import {takeWhile} from "rxjs/operators";


@Component({
  selector: 'app-google-map2',
  templateUrl: './google-map2.component.html',
  styleUrls: ['./google-map2.component.css']
})
export class GoogleMap2Component implements OnInit {


  @Output() onClose = new EventEmitter();
  @Input() location: any = null;  //  Single Location input for map creation...
  @Input() extent: any = null;    // Lng and Lat Bounds

  @ViewChild('gmap', {read: ElementRef, static: true}) gmapElement:  ElementRef;
  //@ViewChild('window', {read: ElementRef, static: true}) gmapHeight: ElementRef;

  map: google.maps.Map;
  isLoading:boolean = true;
  height: string = '1000px';
  isAlive: boolean = true;

  constructor(private app: AppService) { }

  ngOnInit() {

    this.app.handleLogIn();



    var map = document.getElementById("gmap");

    map.style.height = (window.innerHeight - 196) + "px";



    var mapProp;
    var _self = this;
      mapProp = {
        center: new google.maps.LatLng(26.208254, -98.181494),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      // Initialize the google map..

          //this.gmapElement
      if(this.gmapElement) this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
      else this.map = new google.maps.Map(map, mapProp);

       // =-=-= GOINT TO CONTROL ALL THE TOOL BAR ACTIONS =-=-=-=-=

       this.app.toolbarActions.pipe(takeWhile(() => this.isAlive)).subscribe(action => {
          switch (action.action) {
            case this.app.toolbarActivies.COLLAPSE_TOOLBAR: // If toolbar collapse...

                if(action.data) {
                  // Setup the map Height....
                var map = document.getElementById("gmap");
                map.style.height = (window.innerHeight - 196) + "px";
                }else {
                  var map = document.getElementById("gmap");

                  map.style.height = (window.innerHeight - 60) + "px";
                }

             break;
            default:
             break;
          }
       });


  }

  ngOnChanges() {

    // If Extent Change then zoom to that bounds...
    if(this.extent) {


      var max = new google.maps.LatLng(this.extent.ymax ,this.extent.xmax);

      var min = new google.maps.LatLng(this.extent.ymin, this.extent.xmin);
      var bounds = new google.maps.LatLngBounds(min, max);
      this.map.fitBounds(bounds); // Zoom to the extent in question..
      this.extent = null;

    }



  }

  ngOnDestroy() {
    this.isAlive = false;
  }

}
