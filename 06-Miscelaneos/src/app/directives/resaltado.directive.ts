import { Directive, ElementRef, HostListener, Input} from '@angular/core';
//para trabajar con el elemento html en el cual esta puesto la directiva se necesita (ElementRef)
@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el: ElementRef) { 
  console.log("directiva llamada");    
   // el.nativeElement.style.backgroundColor = "yellow";
  }
  //el hostlistener nos permite emitir un tipo de evento por medio de su parametro(mouseenter) lo cual lleva a ponerle un color de fondo cuando el mause esta en sima de el elemnto html.
  
  @Input("appResaltado") nuevoColor:string;

   @HostListener('mouseenter') mouseEntro(){

    this.el.nativeElement.style.backgroundColor = "yellow";
    this.resaltar( this.nuevoColor || 'yellow');
   }
    //con el mouseleave le quitamos dicho evento una vez se le quite el mause de ensima del elemento
   @HostListener('mouseleave') mouseSalio(){

    this.el.nativeElement.style.backgroundColor = null;
    this.resaltar( null);
   }

   private resaltar( color: string){
    this.el.nativeElement.style.backgroundColor = color;
   }

}
