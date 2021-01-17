import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './componnts/home/home.component';
import { SearchComponent } from './componnts/search/search.component';
import { ArtistaComponent } from './componnts/artista/artista.component';
import { NavbarComponent } from './componnts/shared/navbar/navbar.component';


//importar rutas
import { ROUTES } from './app.routes';

//services
import { SpotifyService } from './service/spotify.service';

//pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

import { TargetasComponent } from './componnts/targetas/targetas.component';
import { LoadingComponent } from './componnts/shared/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    DomseguroPipe,
    TargetasComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES,{ useHash:true })
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
