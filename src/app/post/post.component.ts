import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  route:ActivatedRoute;
 constructor (route:ActivatedRoute){
  this.route=route;
 }
  parameterValue='';
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.parameterValue = params['idh']
    })
  }
}
