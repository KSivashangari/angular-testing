import { Component,Input,OnChanges, SimpleChanges,OnInit,DoCheck,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges,OnInit,DoCheck,OnDestroy{
  //@Input() text='';
  @Input() text:string[]=[];
  //----------------ngOnCanges Method---------------
  ngOnChanges(changes: SimpleChanges): void {
    //if(!changes['text'].isFirstChange()){
      //onsole.log('Onchanges Callled!',changes['text'].currentValue);
    //   console.log('You are modifying the original value');
    // }
    console.log('Onchanges Callled!');
  }
  noOfTitles = 0;
  ngOnInit(): void {
    console.log('OnInit Called!');
    this.text.push('Angular title');
    this.noOfTitles = 1;
  }
  ngDoCheck(): void {
    if(this.text.length > this.noOfTitles){
    
      console.log('ngDoCheck Called');
      console.log('You are modifying the original value');
      this.noOfTitles++;

    }
  }
  ngOnDestroy(): void {
    
    console.log('ngDestroy called!');
  }
}
