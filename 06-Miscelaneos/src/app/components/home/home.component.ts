import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    
  
  <app-ng-style></app-ng-style> 
  <br>

  <app-css></app-css>
  <br>

  <p>
   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid esse voluptatem eligendi assumenda necessitatibus distinctio unde nam fuga expedita et. Numquam voluptates consequuntur, animi molestias officia ex unde sint fuga.
  </p> 
  <br>

  <app-clases></app-clases>
  <br>

  <p [appResaltado]="'green'">
   Hola mundo
  </p>
  <br>

  <app-ngswitch></app-ngswitch>
  <br>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
