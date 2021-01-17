import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* los observables no vienen de angular sino de rxjs */
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  // getArtista: any;

  constructor( private http: HttpClient) {
    console.log('spotify service list');
   }


   getQuery( query: string) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBXqSseNPAZwAr9Yrw0_NeZqHhWOLm9o899d-js1UO9cj2992NFe424bNpthoQcV2qDzaOp17pHZAL76ns'
    });

    return this.http.get( url, { headers });

   }
    
   //el httpHeaders me permite modificar los headers por que hay servicios que me piden token o piden autenticacion o piden utenticar la informacionde de alguna manera.
   //de esta forma se hacen las peticiones

   getNewReleases(){
    
    // informacion tomada de la apicacion postman
    /* const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBTNF6vpQJJ8jq0Lp-lR5gRgIzA7oBr6jhOYr11T9n1aXB85Z-9nDacMH1QDFveTeMCl1TVjxDt5yxaMDo'
    }); */
     return this.getQuery('browse/new-releases')
                .pipe( map( data => data['albums'].items));


    /* return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .pipe( map ( data =>  data['albums'].items )); */
    }

    getArtistas( termino: string ) {

      return this.getQuery(`search?q=${ termino }&type=artist&limit=15&include_external=25`)
                 .pipe( map ( data => data['artists'].items ));
      }

      getArtista( id: string ) {

        return this.getQuery(`artists/${ id }`)
                  /*  .pipe( map ( data => data['artists'].items )); */
        }


        getTopTracks( id: string ) {

          return this.getQuery(`artists/${ id }/top-tracks?market=us`)
                    .pipe( map ( data => data['tracks'] )); 
          }  
}
