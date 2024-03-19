import { Component, OnInit } from '@angular/core';
import { NgControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  CountryList:Country[]=[
    new Country('1','India'),
    new Country('2','USA'),
    new Country('3','England')
  ]
  // get from data
onSubmit(form:NgForm){
  console.log(form.value);
}
// onSubmit(FormControl:NgControl){
//   console.log(FormControl.value);
// }

contact!:contact;

ngOnInit(): void {
  this.contact={
     firstName:"",
     lastName:"Shangari",
     email:"sivashangari@cameoindia.com",
     gender:"female",
     isMarried:true,
     country:"1",
     Address:{
      city:"chennai",
      street:"orandiyamman street",
      pincode:"600042"
     }
  }
}
  
}
class Country{
    id:String;
    name:String;

    constructor(id:String, name:String){
      this.id=id;
      this.name=name;
    }
}

class contact{
  firstName!:String;
  lastName!:String;
  email!:String;
  gender!:String;
  isMarried!:boolean;
  country!:String;
  Address!: {
    city:String;
    street:String;
    pincode:String;
  }
}