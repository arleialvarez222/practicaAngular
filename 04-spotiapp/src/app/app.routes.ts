import { Routes } from '@angular/router';
import { HomeComponent } from './componnts/home/home.component';
import { SearchComponent } from './componnts/search/search.component';
import { ArtistaComponent } from './componnts/artista/artista.component';



export const ROUTES: Routes = [ 
    { path: 'home', component: HomeComponent},
    { path: 'search', component: SearchComponent},
    { path: 'artist/:id', component: ArtistaComponent},
    { path: '', pathMatch: 'full', redirectTo: 'home'},//cualquier otro path me va a redirecionar al home
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
]