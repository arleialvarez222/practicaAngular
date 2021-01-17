import { Component} from '@angular/core';



@Component({
    selector: 'app-body',
    templateUrl: './body.componente.html'
    
})
export class BodyComponent {
    
    mostrar = true;

    frase: any = {
        mensaje: 'un granpoder requiere de una gran responsabilidad',
        AUTOR: 'Ben parker'
    };

    personajes: string[] = ['spiderman', 'venon', 'dr. optopus'];
}