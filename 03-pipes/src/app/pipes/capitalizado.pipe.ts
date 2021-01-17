import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas: boolean = true): string {
  
    //separa todas las palabras y las convierte a minusculas
    value = value.toLocaleLowerCase();
    let nombres = value.split(' ');

    if(todas){
      nombres = nombres.map( nombre =>{
        return nombre[0].toUpperCase() + nombre.substr(1);
      }) 
    }else{
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
      //nombres[0][0]hace referencia a la primer palabra y el segundo a la primera letra
    }
    return nombres.join(' ');
    //coge el valor original
    //console.log(value);
    //muestra los argumentos adicionales
    //console.log(args);


    return 'hola mundo';
  }

}
