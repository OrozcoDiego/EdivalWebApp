import { Component } from '@angular/core';

@Component({
  selector: 'app-libro2-bloque2-semana2',
  templateUrl: './semana2.component.html',
  styleUrls: ['./semana2.component.css']
})
export class Libro2Bloque2Semana2Component {
  titulo = "Escuchar para colaborar";
  colorTitulo = "rgb(0, 186, 222)";
  foco1 = "<b class='¿'>¿</b><b>Qué te gusta realizar en tu tiempo libre?</b>";
  foco2 = "<b class='¿'>¿</b><b>Por qué algunos no siguen los consejos que reciben?</b>";
  colorFoco = "rgb(0, 186, 222)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_2/Bloque_2/Semana_2/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">Durante los siguientes agradables días del otoño, los adultos repartieron las
  diversas labores que necesitaban realizar para vivir en este nuevo hogar.
  Algunos recolectaban leña, frutos o cereales que cultivaban; otros realizaban
  actividades de cacería o pesca y los pequeños aprendían de sus padres. Varios
  niños, para alejarse de estos necesarios trabajos, tomaron la costumbre de
  reunirse en un lugar silencioso, cerca del lago, para divertirse realizando algunas
  danzas. Durante algún tiempo los niños repitieron su juego. Un día, un anciano
  que nunca antes habían visto, se acercó a ellos. Sobre su clara cabellera que
  brillaba como la plata, portaba unas plumas también muy blancas. El extraño
  abuelo dijo cosas realmente temibles, les advirtió que dejaran de escapar de
  sus labores para danzar, o algo muy malo podría pasarles…</p>`;
  parrafo2 = `<p class="texto">Los niños hacían como que entendían, pero en realidad no tomaron en
  cuenta las recomendaciones del anciano. Y, aunque se escondían, él los
  encontró varias veces para explicarles sus consejos y que comprendieran
  que teniendo orden en sus trabajos podrían cumplir sus responsabilidades y
  luego, realizar otras actividades que quisieran.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "Trabajar con orden";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_2/Bloque_2/Semana_2/Actividad.png";

  bloque = "2";
  actividad_1 = "Rellena el círculo de la respuesta y escribe lo que se pide.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
