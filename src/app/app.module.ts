import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { MatTabsModule } from '@angular/material/tabs'; // no lo he usado

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

//My Components
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { IndiceComponent } from './components/indice/indice.component';
import { Libro1Bloque1Semana1Component } from './components/revalorando/libro1/bloque1/semana1/semana1.component';
import { Libro1Bloque1Semana2Component } from './components/revalorando/libro1/bloque1/semana2/semana2.component';
import { Libro1Bloque1Semana3Component } from './components/revalorando/libro1/bloque1/semana3/semana3.component';
import { Libro1Bloque1Semana4Component } from './components/revalorando/libro1/bloque1/semana4/semana4.component';
import { Libro1Bloque1Semana5Component } from './components/revalorando/libro1/bloque1/semana5/semana5.component';
import { Libro1Bloque1Semana6Component } from './components/revalorando/libro1/bloque1/semana6/semana6.component';
import { Libro1Bloque1Semana7Component } from './components/revalorando/libro1/bloque1/semana7/semana7.component';
import { Libro1Bloque1Semana8Component } from './components/revalorando/libro1/bloque1/semana8/semana8.component';
import { Libro1Bloque2Semana1Component } from './components/revalorando/libro1/bloque2/semana1/semana1.component';
import { Libro1Bloque2Semana2Component } from './components/revalorando/libro1/bloque2/semana2/semana2.component';
import { Libro1Bloque2Semana3Component } from './components/revalorando/libro1/bloque2/semana3/semana3.component';
import { Libro1Bloque2Semana4Component } from './components/revalorando/libro1/bloque2/semana4/semana4.component';
import { Libro1Bloque3Semana1Component } from './components/revalorando/libro1/bloque3/semana1/semana1.component';
import { Libro1Bloque3Semana2Component } from './components/revalorando/libro1/bloque3/semana2/semana2.component';
import { Libro1Bloque3Semana3Component } from './components/revalorando/libro1/bloque3/semana3/semana3.component';
import { Libro1Bloque3Semana4Component } from './components/revalorando/libro1/bloque3/semana4/semana4.component';
import { Libro1Bloque3Semana5Component } from './components/revalorando/libro1/bloque3/semana5/semana5.component';
import { Libro1Bloque3Semana6Component } from './components/revalorando/libro1/bloque3/semana6/semana6.component';
import { Libro1Bloque3Semana7Component } from './components/revalorando/libro1/bloque3/semana7/semana7.component';
import { Libro1Bloque3Semana8Component } from './components/revalorando/libro1/bloque3/semana8/semana8.component';
import { Libro1Bloque4Semana1Component } from './components/revalorando/libro1/bloque4/semana1/semana1.component';
import { Libro1Bloque4Semana2Component } from './components/revalorando/libro1/bloque4/semana2/semana2.component';
import { Libro1Bloque4Semana3Component } from './components/revalorando/libro1/bloque4/semana3/semana3.component';
import { Libro1Bloque4Semana4Component } from './components/revalorando/libro1/bloque4/semana4/semana4.component';
import { Libro1Bloque5Semana1Component } from './components/revalorando/libro1/bloque5/semana1/semana1.component';
import { Libro1Bloque5Semana2Component } from './components/revalorando/libro1/bloque5/semana2/semana2.component';
import { Libro1Bloque5Semana3Component } from './components/revalorando/libro1/bloque5/semana3/semana3.component';
import { Libro1Bloque5Semana4Component } from './components/revalorando/libro1/bloque5/semana4/semana4.component';

import { Libro2Bloque1Semana1Component } from './components/revalorando/libro2/bloque1/semana1/semana1.component';
import { Libro2Bloque1Semana2Component } from './components/revalorando/libro2/bloque1/semana2/semana2.component';
import { Libro2Bloque1Semana3Component } from './components/revalorando/libro2/bloque1/semana3/semana3.component';
import { Libro2Bloque1Semana4Component } from './components/revalorando/libro2/bloque1/semana4/semana4.component';
import { Libro2Bloque1Semana5Component } from './components/revalorando/libro2/bloque1/semana5/semana5.component';
import { Libro2Bloque1Semana6Component } from './components/revalorando/libro2/bloque1/semana6/semana6.component';
import { Libro2Bloque1Semana7Component } from './components/revalorando/libro2/bloque1/semana7/semana7.component';
import { Libro2Bloque1Semana8Component } from './components/revalorando/libro2/bloque1/semana8/semana8.component';
import { Libro2Bloque2Semana1Component } from './components/revalorando/libro2/bloque2/semana1/semana1.component';
import { Libro2Bloque2Semana2Component } from './components/revalorando/libro2/bloque2/semana2/semana2.component';
import { Libro2Bloque2Semana3Component } from './components/revalorando/libro2/bloque2/semana3/semana3.component';
import { Libro2Bloque2Semana4Component } from './components/revalorando/libro2/bloque2/semana4/semana4.component';
import { Libro2Bloque3Semana1Component } from './components/revalorando/libro2/bloque3/semana1/semana1.component';
import { Libro2Bloque3Semana2Component } from './components/revalorando/libro2/bloque3/semana2/semana2.component';
import { Libro2Bloque3Semana3Component } from './components/revalorando/libro2/bloque3/semana3/semana3.component';
import { Libro2Bloque3Semana4Component } from './components/revalorando/libro2/bloque3/semana4/semana4.component';
import { Libro2Bloque3Semana5Component } from './components/revalorando/libro2/bloque3/semana5/semana5.component';
import { Libro2Bloque3Semana6Component } from './components/revalorando/libro2/bloque3/semana6/semana6.component';
import { Libro2Bloque3Semana7Component } from './components/revalorando/libro2/bloque3/semana7/semana7.component';
import { Libro2Bloque3Semana8Component } from './components/revalorando/libro2/bloque3/semana8/semana8.component';
import { Libro2Bloque4Semana1Component } from './components/revalorando/libro2/bloque4/semana1/semana1.component';
import { Libro2Bloque4Semana2Component } from './components/revalorando/libro2/bloque4/semana2/semana2.component';
import { Libro2Bloque4Semana3Component } from './components/revalorando/libro2/bloque4/semana3/semana3.component';
import { Libro2Bloque4Semana4Component } from './components/revalorando/libro2/bloque4/semana4/semana4.component';
import { Libro2Bloque5Semana1Component } from './components/revalorando/libro2/bloque5/semana1/semana1.component';
import { Libro2Bloque5Semana2Component } from './components/revalorando/libro2/bloque5/semana2/semana2.component';
import { Libro2Bloque5Semana3Component } from './components/revalorando/libro2/bloque5/semana3/semana3.component';
import { Libro2Bloque5Semana4Component } from './components/revalorando/libro2/bloque5/semana4/semana4.component';

import { Libro3Bloque1Semana1Component } from './components/revalorando/libro3/bloque1/semana1/semana1.component';
import { Libro3Bloque1Semana2Component } from './components/revalorando/libro3/bloque1/semana2/semana2.component';
import { Libro3Bloque1Semana3Component } from './components/revalorando/libro3/bloque1/semana3/semana3.component';
import { Libro3Bloque1Semana4Component } from './components/revalorando/libro3/bloque1/semana4/semana4.component';
import { Libro3Bloque1Semana5Component } from './components/revalorando/libro3/bloque1/semana5/semana5.component';
import { Libro3Bloque1Semana6Component } from './components/revalorando/libro3/bloque1/semana6/semana6.component';
import { Libro3Bloque1Semana7Component } from './components/revalorando/libro3/bloque1/semana7/semana7.component';
import { Libro3Bloque1Semana8Component } from './components/revalorando/libro3/bloque1/semana8/semana8.component';
import { Libro3Bloque2Semana1Component } from './components/revalorando/libro3/bloque2/semana1/semana1.component';
import { Libro3Bloque2Semana2Component } from './components/revalorando/libro3/bloque2/semana2/semana2.component';
import { Libro3Bloque2Semana3Component } from './components/revalorando/libro3/bloque2/semana3/semana3.component';
import { Libro3Bloque2Semana4Component } from './components/revalorando/libro3/bloque2/semana4/semana4.component';
import { Libro3Bloque3Semana1Component } from './components/revalorando/libro3/bloque3/semana1/semana1.component';
import { Libro3Bloque3Semana2Component } from './components/revalorando/libro3/bloque3/semana2/semana2.component';
import { Libro3Bloque3Semana3Component } from './components/revalorando/libro3/bloque3/semana3/semana3.component';
import { Libro3Bloque3Semana4Component } from './components/revalorando/libro3/bloque3/semana4/semana4.component';
import { Libro3Bloque3Semana5Component } from './components/revalorando/libro3/bloque3/semana5/semana5.component';
import { Libro3Bloque3Semana6Component } from './components/revalorando/libro3/bloque3/semana6/semana6.component';
import { Libro3Bloque3Semana7Component } from './components/revalorando/libro3/bloque3/semana7/semana7.component';
import { Libro3Bloque3Semana8Component } from './components/revalorando/libro3/bloque3/semana8/semana8.component';
import { Libro3Bloque4Semana1Component } from './components/revalorando/libro3/bloque4/semana1/semana1.component';
import { Libro3Bloque4Semana2Component } from './components/revalorando/libro3/bloque4/semana2/semana2.component';
import { Libro3Bloque4Semana3Component } from './components/revalorando/libro3/bloque4/semana3/semana3.component';
import { Libro3Bloque4Semana4Component } from './components/revalorando/libro3/bloque4/semana4/semana4.component';
import { Libro3Bloque5Semana1Component } from './components/revalorando/libro3/bloque5/semana1/semana1.component';
import { Libro3Bloque5Semana2Component } from './components/revalorando/libro3/bloque5/semana2/semana2.component';
import { Libro3Bloque5Semana3Component } from './components/revalorando/libro3/bloque5/semana3/semana3.component';
import { Libro3Bloque5Semana4Component } from './components/revalorando/libro3/bloque5/semana4/semana4.component';

import { Libro4Bloque1Semana1Component } from './components/revalorando/libro4/bloque1/semana1/semana1.component';
import { Libro4Bloque1Semana2Component } from './components/revalorando/libro4/bloque1/semana2/semana2.component';
import { Libro4Bloque1Semana3Component } from './components/revalorando/libro4/bloque1/semana3/semana3.component';
import { Libro4Bloque1Semana4Component } from './components/revalorando/libro4/bloque1/semana4/semana4.component';
import { Libro4Bloque1Semana5Component } from './components/revalorando/libro4/bloque1/semana5/semana5.component';
import { Libro4Bloque1Semana6Component } from './components/revalorando/libro4/bloque1/semana6/semana6.component';
import { Libro4Bloque1Semana7Component } from './components/revalorando/libro4/bloque1/semana7/semana7.component';
import { Libro4Bloque1Semana8Component } from './components/revalorando/libro4/bloque1/semana8/semana8.component';
import { Libro4Bloque2Semana1Component } from './components/revalorando/libro4/bloque2/semana1/semana1.component';
import { Libro4Bloque2Semana2Component } from './components/revalorando/libro4/bloque2/semana2/semana2.component';
import { Libro4Bloque2Semana3Component } from './components/revalorando/libro4/bloque2/semana3/semana3.component';
import { Libro4Bloque2Semana4Component } from './components/revalorando/libro4/bloque2/semana4/semana4.component';
import { Libro4Bloque3Semana1Component } from './components/revalorando/libro4/bloque3/semana1/semana1.component';
import { Libro4Bloque3Semana2Component } from './components/revalorando/libro4/bloque3/semana2/semana2.component';
import { Libro4Bloque3Semana3Component } from './components/revalorando/libro4/bloque3/semana3/semana3.component';
import { Libro4Bloque3Semana4Component } from './components/revalorando/libro4/bloque3/semana4/semana4.component';
import { Libro4Bloque3Semana5Component } from './components/revalorando/libro4/bloque3/semana5/semana5.component';
import { Libro4Bloque3Semana6Component } from './components/revalorando/libro4/bloque3/semana6/semana6.component';
import { Libro4Bloque3Semana7Component } from './components/revalorando/libro4/bloque3/semana7/semana7.component';
import { Libro4Bloque3Semana8Component } from './components/revalorando/libro4/bloque3/semana8/semana8.component';
import { Libro4Bloque4Semana1Component } from './components/revalorando/libro4/bloque4/semana1/semana1.component';
import { Libro4Bloque4Semana2Component } from './components/revalorando/libro4/bloque4/semana2/semana2.component';
import { Libro4Bloque4Semana3Component } from './components/revalorando/libro4/bloque4/semana3/semana3.component';
import { Libro4Bloque4Semana4Component } from './components/revalorando/libro4/bloque4/semana4/semana4.component';
import { Libro4Bloque5Semana1Component } from './components/revalorando/libro4/bloque5/semana1/semana1.component';
import { Libro4Bloque5Semana2Component } from './components/revalorando/libro4/bloque5/semana2/semana2.component';
import { Libro4Bloque5Semana3Component } from './components/revalorando/libro4/bloque5/semana3/semana3.component';
import { Libro4Bloque5Semana4Component } from './components/revalorando/libro4/bloque5/semana4/semana4.component';

import { Libro5Bloque1Semana1Component } from './components/revalorando/libro5/bloque1/semana1/semana1.component';
import { Libro5Bloque1Semana2Component } from './components/revalorando/libro5/bloque1/semana2/semana2.component';
import { Libro5Bloque1Semana3Component } from './components/revalorando/libro5/bloque1/semana3/semana3.component';
import { Libro5Bloque1Semana4Component } from './components/revalorando/libro5/bloque1/semana4/semana4.component';
import { Libro5Bloque1Semana5Component } from './components/revalorando/libro5/bloque1/semana5/semana5.component';
import { Libro5Bloque1Semana6Component } from './components/revalorando/libro5/bloque1/semana6/semana6.component';
import { Libro5Bloque1Semana7Component } from './components/revalorando/libro5/bloque1/semana7/semana7.component';
import { Libro5Bloque1Semana8Component } from './components/revalorando/libro5/bloque1/semana8/semana8.component';
import { Libro5Bloque2Semana1Component } from './components/revalorando/libro5/bloque2/semana1/semana1.component';
import { Libro5Bloque2Semana2Component } from './components/revalorando/libro5/bloque2/semana2/semana2.component';
import { Libro5Bloque2Semana3Component } from './components/revalorando/libro5/bloque2/semana3/semana3.component';
import { Libro5Bloque2Semana4Component } from './components/revalorando/libro5/bloque2/semana4/semana4.component';
import { Libro5Bloque3Semana1Component } from './components/revalorando/libro5/bloque3/semana1/semana1.component';
import { Libro5Bloque3Semana2Component } from './components/revalorando/libro5/bloque3/semana2/semana2.component';
import { Libro5Bloque3Semana3Component } from './components/revalorando/libro5/bloque3/semana3/semana3.component';
import { Libro5Bloque3Semana4Component } from './components/revalorando/libro5/bloque3/semana4/semana4.component';
import { Libro5Bloque3Semana5Component } from './components/revalorando/libro5/bloque3/semana5/semana5.component';
import { Libro5Bloque3Semana6Component } from './components/revalorando/libro5/bloque3/semana6/semana6.component';
import { Libro5Bloque3Semana7Component } from './components/revalorando/libro5/bloque3/semana7/semana7.component';
import { Libro5Bloque3Semana8Component } from './components/revalorando/libro5/bloque3/semana8/semana8.component';
import { Libro5Bloque4Semana1Component } from './components/revalorando/libro5/bloque4/semana1/semana1.component';
import { Libro5Bloque4Semana2Component } from './components/revalorando/libro5/bloque4/semana2/semana2.component';
import { Libro5Bloque4Semana3Component } from './components/revalorando/libro5/bloque4/semana3/semana3.component';
import { Libro5Bloque4Semana4Component } from './components/revalorando/libro5/bloque4/semana4/semana4.component';
import { Libro5Bloque5Semana1Component } from './components/revalorando/libro5/bloque5/semana1/semana1.component';
import { Libro5Bloque5Semana2Component } from './components/revalorando/libro5/bloque5/semana2/semana2.component';
import { Libro5Bloque5Semana3Component } from './components/revalorando/libro5/bloque5/semana3/semana3.component';
import { Libro5Bloque5Semana4Component } from './components/revalorando/libro5/bloque5/semana4/semana4.component';

import { Libro6Bloque1Semana1Component } from './components/revalorando/libro6/bloque1/semana1/semana1.component';
import { Libro6Bloque1Semana2Component } from './components/revalorando/libro6/bloque1/semana2/semana2.component';
import { Libro6Bloque1Semana3Component } from './components/revalorando/libro6/bloque1/semana3/semana3.component';
import { Libro6Bloque1Semana4Component } from './components/revalorando/libro6/bloque1/semana4/semana4.component';
import { Libro6Bloque1Semana5Component } from './components/revalorando/libro6/bloque1/semana5/semana5.component';
import { Libro6Bloque1Semana6Component } from './components/revalorando/libro6/bloque1/semana6/semana6.component';
import { Libro6Bloque1Semana7Component } from './components/revalorando/libro6/bloque1/semana7/semana7.component';
import { Libro6Bloque1Semana8Component } from './components/revalorando/libro6/bloque1/semana8/semana8.component';
import { Libro6Bloque2Semana1Component } from './components/revalorando/libro6/bloque2/semana1/semana1.component';
import { Libro6Bloque2Semana2Component } from './components/revalorando/libro6/bloque2/semana2/semana2.component';
import { Libro6Bloque2Semana3Component } from './components/revalorando/libro6/bloque2/semana3/semana3.component';
import { Libro6Bloque2Semana4Component } from './components/revalorando/libro6/bloque2/semana4/semana4.component';
import { Libro6Bloque3Semana1Component } from './components/revalorando/libro6/bloque3/semana1/semana1.component';
import { Libro6Bloque3Semana2Component } from './components/revalorando/libro6/bloque3/semana2/semana2.component';
import { Libro6Bloque3Semana3Component } from './components/revalorando/libro6/bloque3/semana3/semana3.component';
import { Libro6Bloque3Semana4Component } from './components/revalorando/libro6/bloque3/semana4/semana4.component';
import { Libro6Bloque3Semana5Component } from './components/revalorando/libro6/bloque3/semana5/semana5.component';
import { Libro6Bloque3Semana6Component } from './components/revalorando/libro6/bloque3/semana6/semana6.component';
import { Libro6Bloque3Semana7Component } from './components/revalorando/libro6/bloque3/semana7/semana7.component';
import { Libro6Bloque3Semana8Component } from './components/revalorando/libro6/bloque3/semana8/semana8.component';
import { Libro6Bloque4Semana1Component } from './components/revalorando/libro6/bloque4/semana1/semana1.component';
import { Libro6Bloque4Semana2Component } from './components/revalorando/libro6/bloque4/semana2/semana2.component';
import { Libro6Bloque4Semana3Component } from './components/revalorando/libro6/bloque4/semana3/semana3.component';
import { Libro6Bloque4Semana4Component } from './components/revalorando/libro6/bloque4/semana4/semana4.component';
import { Libro6Bloque5Semana1Component } from './components/revalorando/libro6/bloque5/semana1/semana1.component';
import { Libro6Bloque5Semana2Component } from './components/revalorando/libro6/bloque5/semana2/semana2.component';
import { Libro6Bloque5Semana3Component } from './components/revalorando/libro6/bloque5/semana3/semana3.component';
import { Libro6Bloque5Semana4Component } from './components/revalorando/libro6/bloque5/semana4/semana4.component';
import { LecturaComponent } from './components/lectura/lectura.component';
import { LapicitoComponent } from './components/lapicito/lapicito.component';
import { ActividadTituloComponent } from './components/actividad-titulo/actividad-titulo.component';
import { CambiarPaginaComponent } from './components/cambiar-pagina/cambiar-pagina.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    IndiceComponent,
    Libro1Bloque1Semana1Component,
    Libro1Bloque1Semana2Component,
    Libro1Bloque1Semana3Component,
    Libro1Bloque1Semana4Component,
    Libro1Bloque1Semana5Component,
    Libro1Bloque1Semana6Component,
    Libro1Bloque1Semana7Component,
    Libro1Bloque1Semana8Component,
    Libro1Bloque2Semana1Component,
    Libro1Bloque2Semana2Component,
    Libro1Bloque2Semana3Component,
    Libro1Bloque2Semana4Component,
    Libro1Bloque3Semana1Component,
    Libro1Bloque3Semana2Component,
    Libro1Bloque3Semana3Component,
    Libro1Bloque3Semana4Component,
    Libro1Bloque3Semana5Component,
    Libro1Bloque3Semana6Component,
    Libro1Bloque3Semana7Component,
    Libro1Bloque3Semana8Component,
    Libro1Bloque4Semana1Component,
    Libro1Bloque4Semana2Component,
    Libro1Bloque4Semana3Component,
    Libro1Bloque4Semana4Component,
    Libro1Bloque5Semana1Component,
    Libro1Bloque5Semana2Component,
    Libro1Bloque5Semana3Component,
    Libro1Bloque5Semana4Component,

    Libro2Bloque1Semana1Component,
    Libro2Bloque1Semana2Component,
    Libro2Bloque1Semana3Component,
    Libro2Bloque1Semana4Component,
    Libro2Bloque1Semana5Component,
    Libro2Bloque1Semana6Component,
    Libro2Bloque1Semana7Component,
    Libro2Bloque1Semana8Component,
    Libro2Bloque2Semana1Component,
    Libro2Bloque2Semana2Component,
    Libro2Bloque2Semana3Component,
    Libro2Bloque2Semana4Component,
    Libro2Bloque3Semana1Component,
    Libro2Bloque3Semana2Component,
    Libro2Bloque3Semana3Component,
    Libro2Bloque3Semana4Component,
    Libro2Bloque3Semana5Component,
    Libro2Bloque3Semana6Component,
    Libro2Bloque3Semana7Component,
    Libro2Bloque3Semana8Component,
    Libro2Bloque4Semana1Component,
    Libro2Bloque4Semana2Component,
    Libro2Bloque4Semana3Component,
    Libro2Bloque4Semana4Component,
    Libro2Bloque5Semana1Component,
    Libro2Bloque5Semana2Component,
    Libro2Bloque5Semana3Component,
    Libro2Bloque5Semana4Component,

    Libro3Bloque1Semana1Component,
    Libro3Bloque1Semana2Component,
    Libro3Bloque1Semana3Component,
    Libro3Bloque1Semana4Component,
    Libro3Bloque1Semana5Component,
    Libro3Bloque1Semana6Component,
    Libro3Bloque1Semana7Component,
    Libro3Bloque1Semana8Component,
    Libro3Bloque2Semana1Component,
    Libro3Bloque2Semana2Component,
    Libro3Bloque2Semana3Component,
    Libro3Bloque2Semana4Component,
    Libro3Bloque3Semana1Component,
    Libro3Bloque3Semana2Component,
    Libro3Bloque3Semana3Component,
    Libro3Bloque3Semana4Component,
    Libro3Bloque3Semana5Component,
    Libro3Bloque3Semana6Component,
    Libro3Bloque3Semana7Component,
    Libro3Bloque3Semana8Component,
    Libro3Bloque4Semana1Component,
    Libro3Bloque4Semana2Component,
    Libro3Bloque4Semana3Component,
    Libro3Bloque4Semana4Component,
    Libro3Bloque5Semana1Component,
    Libro3Bloque5Semana2Component,
    Libro3Bloque5Semana3Component,
    Libro3Bloque5Semana4Component,

    Libro4Bloque1Semana1Component,
    Libro4Bloque1Semana2Component,
    Libro4Bloque1Semana3Component,
    Libro4Bloque1Semana4Component,
    Libro4Bloque1Semana5Component,
    Libro4Bloque1Semana6Component,
    Libro4Bloque1Semana7Component,
    Libro4Bloque1Semana8Component,
    Libro4Bloque2Semana1Component,
    Libro4Bloque2Semana2Component,
    Libro4Bloque2Semana3Component,
    Libro4Bloque2Semana4Component,
    Libro4Bloque3Semana1Component,
    Libro4Bloque3Semana2Component,
    Libro4Bloque3Semana3Component,
    Libro4Bloque3Semana4Component,
    Libro4Bloque3Semana5Component,
    Libro4Bloque3Semana6Component,
    Libro4Bloque3Semana7Component,
    Libro4Bloque3Semana8Component,
    Libro4Bloque4Semana1Component,
    Libro4Bloque4Semana2Component,
    Libro4Bloque4Semana3Component,
    Libro4Bloque4Semana4Component,
    Libro4Bloque5Semana1Component,
    Libro4Bloque5Semana2Component,
    Libro4Bloque5Semana3Component,
    Libro4Bloque5Semana4Component,

    Libro5Bloque1Semana1Component,
    Libro5Bloque1Semana2Component,
    Libro5Bloque1Semana3Component,
    Libro5Bloque1Semana4Component,
    Libro5Bloque1Semana5Component,
    Libro5Bloque1Semana6Component,
    Libro5Bloque1Semana7Component,
    Libro5Bloque1Semana8Component,
    Libro5Bloque2Semana1Component,
    Libro5Bloque2Semana2Component,
    Libro5Bloque2Semana3Component,
    Libro5Bloque2Semana4Component,
    Libro5Bloque3Semana1Component,
    Libro5Bloque3Semana2Component,
    Libro5Bloque3Semana3Component,
    Libro5Bloque3Semana4Component,
    Libro5Bloque3Semana5Component,
    Libro5Bloque3Semana6Component,
    Libro5Bloque3Semana7Component,
    Libro5Bloque3Semana8Component,
    Libro5Bloque4Semana1Component,
    Libro5Bloque4Semana2Component,
    Libro5Bloque4Semana3Component,
    Libro5Bloque4Semana4Component,
    Libro5Bloque5Semana1Component,
    Libro5Bloque5Semana2Component,
    Libro5Bloque5Semana3Component,
    Libro5Bloque5Semana4Component,

    Libro6Bloque1Semana1Component,
    Libro6Bloque1Semana2Component,
    Libro6Bloque1Semana3Component,
    Libro6Bloque1Semana4Component,
    Libro6Bloque1Semana5Component,
    Libro6Bloque1Semana6Component,
    Libro6Bloque1Semana7Component,
    Libro6Bloque1Semana8Component,
    Libro6Bloque2Semana1Component,
    Libro6Bloque2Semana2Component,
    Libro6Bloque2Semana3Component,
    Libro6Bloque2Semana4Component,
    Libro6Bloque3Semana1Component,
    Libro6Bloque3Semana2Component,
    Libro6Bloque3Semana3Component,
    Libro6Bloque3Semana4Component,
    Libro6Bloque3Semana5Component,
    Libro6Bloque3Semana6Component,
    Libro6Bloque3Semana7Component,
    Libro6Bloque3Semana8Component,
    Libro6Bloque4Semana1Component,
    Libro6Bloque4Semana2Component,
    Libro6Bloque4Semana3Component,
    Libro6Bloque4Semana4Component,
    Libro6Bloque5Semana1Component,
    Libro6Bloque5Semana2Component,
    Libro6Bloque5Semana3Component,
    Libro6Bloque5Semana4Component,
    LecturaComponent,
    LapicitoComponent,
    ActividadTituloComponent,
    CambiarPaginaComponent
  ],
  imports: [
    BrowserModule,
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    AppRoutingModule,
    MatRadioModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSliderModule,
    MatSelectModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [
    AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
