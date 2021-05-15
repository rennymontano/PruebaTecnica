import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Reducer
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { fromRoot } from '../app/reducer/app.redux.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { DetalleNoticiaComponent } from './components/detalle-noticia/detalle-noticia.component';
import { environment } from 'src/environments/environment.prod';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    DetalleNoticiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      getNoticias: fromRoot.getDataTotal
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([fromRoot.NoticiasEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
