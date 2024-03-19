import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
     firstName ='siva';
     lastName ='shangari';

     isDisabled=false;

     getMax(first:number, second:number){
      return Math.max(first,second);
     }
     
     clickCount=0;
     clickcount1=0;
     clickme(){
      this.clickCount++;
     }

     value='';
     handleInput(event:any){
      this.value=(event.target as HTMLInputElement).value;
     }
    
    //  Array of string-----
     value1='';

     title='List of movies';
      movies=[
      'Zootopia',
      'Batman vs Superman',
      'Harry Potter',
      'X - men',
      'Final Destination'
      ]
    // -----object type-----

    movies1=[
      {title:'Zootopia', director:'Byron Howard, Rich Moore', cast:'Idris Elba, Ginni Bateman', releaseDate:'March 4 2016'},
      {title:'Mjafhaad', director:'Byron Howard, Rich Moore', cast:'Idris Elba, Ginni Bateman', releaseDate:'March 4 2016'},
      {title:'Zootopia', director:'Byron Howard, Rich Moore', cast:'Idris Elba, Ginni Bateman', releaseDate:'March 4 2016'},
      {title:'Zootopia', director:'Byron Howard, Rich Moore', cast:'Idris Elba, Ginni Bateman', releaseDate:'March 4 2016'}
    ]
// ---------------ngSwitch----
  num=0;

// ---------ngIf------------
showMe=true;

// -----Attribute directive-----
//ngClass
enabledRed=false;
enabledbig=false;
enabledItalic=false;

//-------------------------
color ='red';
backcolor='blue';

//-----------------pipe symbols usage--------
todate = new Date();
//------------------Pipe uppercase----------
message='Welcome to Angular';
//--------------------pipe coran----------
price =125;
}
