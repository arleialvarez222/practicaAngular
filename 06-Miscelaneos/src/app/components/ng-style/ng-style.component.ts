import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
  
    <p [style.fontSize.px]="tamano ">
      Hola mundo... esta es una etiqueta html
    </p>
    <br>

    <button class="btn btn-primary" (click) = "tamano = tamano + 5" style="margin-right: 5px;">
        <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-primary" (click) = "tamano = tamano - 5">
        <i class="fa fa-minus"></i>
    </button>
    <br>
  `,
  /* cuando hay un guin que separa se agrega la siguiente letra en mayuscula, ademas se pone la medida en la que se debe tomar en el navegador*/
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  tamano: number = 30;

  constructor() { }

  ngOnInit(): void {
  }

}
