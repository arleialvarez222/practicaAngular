import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
//agregamos el año de forma automatica
   anio: number;

   constructor(){
     this.anio = new Date().getFullYear() + 1;
   }

}
