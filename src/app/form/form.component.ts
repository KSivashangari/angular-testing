import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() carAdded:EventEmitter<string[]> = new EventEmitter;
  Cars:string[]=[];
  carName='';
  addCar(){
    this.Cars.push(this.carName);
    this.carName="";
    console.log(this.Cars);
    this.carAdded.emit(this.Cars);
  }
}
