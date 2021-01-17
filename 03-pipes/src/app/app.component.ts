import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitan America';
  nombre2:string = 'ArleiSon aLvAREz';

  arreglo = [1,2,3,4,5,6,7,8,9];

  personajes : string [] = ['Iroman', 'Spiderman', 'Thor', 'Loki', 'Groot'];
  PI         : number  = Math.PI;
  porcentaje : number  = 0.234;
  salario    : number  = 1234.5;
  fecha      : Date    = new Date();
  activar    : boolean = true; //segun sea el valor que tenga(true o false)se activara el la funcion del boton //para ocultar o mostrar la contraseña

  //para que funcione de esta forma hay que crear un pipes donseguro asi( ng g p y y el nombre que recibira)
  videoUrl   : string = "https://www.youtube.com/embed/ytZkbBHjkXI";

  valorPromesa = new Promise<string> ( (resolve) => {

    setTimeout( () => {
      resolve('llego la data');
    }, 4500);
  });

  heroe = {
    nombre: 'logan',
    clave: 'wolverine',
    edad: 500,
    direccion: {
      calle: 'primera',
      casa: 20
    }
  }
}
