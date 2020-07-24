import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'map-display-xy',
  templateUrl: './display-xy.component.html',
  styleUrls: ['./display-xy.component.css']
})
export class DisplayXYComponent {
  @Input() pauseMove  = false;
  @ViewChild('con', {read: ElementRef, static: true}) container: ElementRef;
  lat = '0';
  long = '0';
  flashLat = false;
  flashLng = false;
  border = false;
  draggin = false;
  shiftX: number;
  shiftY: number;

  constructor(private app: AppService) {}



  // Copy and paste
  copyValue(val: string, option: number){
    // tslint:disable-next-line:triple-equals
     if (!this.pauseMove) { return; } // Kill if is not pause the moving.
     if (option === 0) {  this.flashLng = true; }
        else { this.flashLat = true; }

     navigator.clipboard.writeText(val).then(() => {

           setTimeout(() => {
             this.flashLng = false;
             this.flashLat = false;
           }, 450);
     }, () => {
        this.flashLat = false;
        this.flashLng = false;
     });
  }

  // Return the x and y only 6 decimal places.
  // Return as text not number
  convert(val: number): string{
    if (val){
      return val.toFixed(6);
    }else{
      return '0';
    }

  }

  // Once the map is ready parent notifies child.
  // o setup event listeners...
  public setUpMap(esriMap: any) {
    esriMap.on('mouse-move', object => {

      if (this.pauseMove){
        return; // Kill The Function...
      }
      const point = this.app.esriwebMercatorUtils.webMercatorToGeographic(object.mapPoint);

      this.lat  =  this.convert(point.y);
      this.long =  this.convert(point.x);

    });
  }

  // MOdule: add css class on click by user to identify that it can be move.
  onBorder() {
    this.border = !this.border;
  }

  // Remove Default browser
  onDragStart(e){
    console.log('drag started');
    return false;
  }

  onDragEnd(e) {
    console.log('drag end');
    this.draggin = false;
  }

  onMouseDown(e) {
    console.log('mouse down');
    let self = this;
    if (this.border && !this.draggin) {
      this.draggin = true;
    }

    const div: HTMLElement = this.container.nativeElement;
    this.shiftX = e.clientX - div.getBoundingClientRect().left;
    this.shiftY = e.clientY - div.getBoundingClientRect().top;
    div.style.position = 'absolute';
    div.style.right = '0';
    div.style.bottom = '0';
    div.style.zIndex = '9999';
    this.moveAt(e.pageX, e.pageY);



    // tslint:disable-next-line:no-shadowed-variable
    function onMouseMove(e) {
      if (!self.draggin && !self.border) {return; } // Kill Function..
      self.moveAt(e.pageX, e.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);

    div.onmouseup = () => {
       console.log('Mouse Up');
       this.draggin = false;
       document.removeEventListener('mousemove', onMouseMove);
       div.onmouseup = null;
    };

  }


  moveAt(pageX, pageY) {
     const div: HTMLElement = this.container.nativeElement;
     div.style.left = `${(pageX - this.shiftX)}px`;

     div.style.top  = `${(pageY - this.shiftY)}px`;
  }

}
