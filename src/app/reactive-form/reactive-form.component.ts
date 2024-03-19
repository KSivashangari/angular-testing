import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  CountryList:Country[]=[
    new Country('1','India'),
    new Country('2', 'USA'),
    new Country('3','England')
  ];

   contactForm=new FormGroup({
    firstName:new FormControl('',[Validators.required, Validators.minLength(10)]),
    lastName:new FormControl({
      value:'shangari',
      disabled:false
    },[Validators.required,Validators.maxLength(15),Validators.pattern('^[a-zA-Z]+$')]),
    email:new FormControl('',[Validators.required]),
    gender:new FormControl('',[Validators.required]),
    isMarried:new FormControl('',[Validators.requiredTrue]),
    country:new FormControl('',[Validators.required]),
      address: new FormGroup({
        city:new FormControl('',[Validators.required]),
        street:new FormControl('',[Validators.required]),
        pincode: new FormControl('',[Validators.required])
      })
   })
//validation property
get firstname(){
  return this.contactForm.get('firstName')
}
get lastname(){
  return this.contactForm.get('lastName')
}
get email(){
  return this.contactForm.get('email')
}
get gender(){
  return this.contactForm.get('gender')
}
get marriedstatus(){
  return this.contactForm.get('isMarried')
}
get country(){
  return this.contactForm.get('country')
}
get city(){
  return this.contactForm.get('address')?.get('city')
}
get street(){
  return this.contactForm.get('address')?.get('street')
}
get pincode(){
  return this.contactForm.get('address')?.get('pincode')
}

  onSubmit(){
    console.log(this.contactForm.value)
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