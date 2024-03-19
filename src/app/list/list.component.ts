import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  //Input component using send data parent to child
   // @Input("carsInput") Cars:string[]=[];
   Cars:string[]=[];
   carDataUpdated(carsData:string[]){
    this.Cars = carsData;

   }
}
