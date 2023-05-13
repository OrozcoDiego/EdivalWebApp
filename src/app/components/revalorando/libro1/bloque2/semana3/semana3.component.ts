import { Component } from '@angular/core';

@Component({
  selector: 'app-libro1-bloque2-semana3',
  templateUrl: './semana3.component.html',
  styleUrls: ['./semana3.component.css']
})
export class Libro1Bloque2Semana3Component {
  titulo = "Buscando nuevos amigos";
  colorTitulo = "rgb(239, 196, 79)";
  foco1 = "<b class='¿'>¿</b><b>Cómo te tratan las personas cuando te ensucias?</b>";
  foco2 = "<b class='¿'>¿</b><b>Alguien se ha burlado de ti por ser limpio u ordenado?</b>";
  colorFoco = "rgb(239, 196, 79)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_1/Bloque_2/Semana_3/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">Juan estaba arrastrándose en el lodo, ensuciando su uniforme de la escuela
  que todavía no se había cambiado, cuando vio cómo una ardillita caminaba
  hacia él dando brinquitos y esponjando su colita. La ardillita vio a Juan con sus
  grandes ojos y empezó a olfatearlo. De repente, Juan le preguntó: —¡Ardillita
  bonita!, ¿quieres ser mi amiguita? La ardilla, que era muy limpia respondió:
  —¡Cuánto lo siento niño mugriento! Si no te aseas no puedo ser tu amiga.
  —¡Pues no lo seas!, dijo Juan enojado. Siguió arrastrándose cuando vio a un
  gato que caminaba lentamente, relamiéndose los bigotes. —¡Gatito! <a class="¿ texto">¿</a>Quieres
  ser mi amiguito?, —preguntó Juan; el gato, tranquilamente dijo: —No puedo
  hacer eso, niño desordenado, si no aprendes a ser organizado no puedo ser
  tu amigo. Juan estaba ya haciendo un berrinche terrible, cuando de repente
  escucha una voz que venía del suelo: —¡Yo si quiero ser tu amiga! Volteó
  hacia abajo y vio a una sucia cucaracha que movía sus antenas y le decía:
  —¡Vamos a buscar comida al basurero! Juan contestó: —¡Claro que no, sucia
  cucaracha! ¡Eso es asqueroso! —No te entiendo niño, si tú y yo somos igual de
  sucios y desordenados, pero si quieres quedarte sólo, ¡allá tú! Juan se sintió
  tan asustado que corrió a buscar a mamá.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "¡Ordenamos";
  actividadTituloParte2 = "nuestros globos!";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_1/Bloque_2/Semana_3/Actividad.png";

  bloque = "2";
  actividad_1 = "Participa junto con tus compañeros y maestro(a) en esta actividad, con mucho orden y cuidado.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.actividadTitulo.push(this.actividadTituloParte1);
    this.actividadTitulo.push(this.actividadTituloParte2);
  }
}
