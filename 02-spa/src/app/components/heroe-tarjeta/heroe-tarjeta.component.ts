import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


//el output cuando se quiere emitir un evento va de la mano con el EventEmitter
@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  
  //el input le va a decir a angular que una propidad que yo quiero especificar va ser resivida desde afuera, lo que indica el decorador es que la propiedad heroe puede venir de afuera
 @Input() heroes: any = {};
 @Input() index: number; 

 //heroeSeleccionado es el evento que el padre escucha
 @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    //de esta manera se inicia el EventEmitter
      this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe(){
    // console.log(this.index);
    this.router.navigate( ['/heroe', this.index] )
    // this.heroeSeleccionado.emit(this.index);
  }

}
