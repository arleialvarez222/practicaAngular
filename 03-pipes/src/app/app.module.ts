import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { registerLocaleData } from '@angular/common';
// import { LocalEs } from '@angular/common/locales/es';

/* registerLocaleData(LocalEs); */

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DonseguroPipe } from './pipes/donseguro.pipe';
import { ContrasenaPipe } from './pipes/contraseña.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DonseguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    /* provide: LOCALE_ID,
    useValue: 'es' */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
