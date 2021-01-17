import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  //ActivatedRoute  ( mosgtramos los parametros de la ruta padre)
  constructor( private router: ActivatedRoute) { 

    this.router.params.subscribe( parametros => {
      console.log( "RUTA_PADRE");
      console.log( parametros);
    })
  }

  ngOnInit(): void {
  }

}
