// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent  {

  nuevasCanciones: any[] = [];

  loading: boolean;
  error: boolean;

  constructor( private spotify: SpotifyService){

    this.error = false; 
    this.loading = true;  

    this.spotify.getNewReleases()
      .subscribe((data: any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    }, ( errorServicio ) =>{

      this.loading = false;
      this.error = true;
      console.log(errorServicio);
    });
    
  }
  // paises: any[] = [];

  // constructor( private http: HttpClient) { 
  //   //para utilizar el http y hacer una peticion
  //   console.log('constructor del home hecho');
  //   this.http.get('https://restcountries.eu/rest/v2/lang/es')
  //   .subscribe( (resp: any) => {
  //     this.paises = resp;
  //     console.log(resp);
  //   })
  // }


}
