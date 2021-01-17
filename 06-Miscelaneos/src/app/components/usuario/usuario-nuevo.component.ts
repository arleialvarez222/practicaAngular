import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  //en la ruta hija agregamos parent para obtener los parametros del padre. 
  constructor( private router: ActivatedRoute) { 

    this.router.parent.params.subscribe( parametros => {
      console.log( "RUTA_HIJAusuario nuevo");
      console.log( parametros);
    })
  }

  ngOnInit(): void {
  }

}
