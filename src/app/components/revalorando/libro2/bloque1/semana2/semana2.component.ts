import { Component } from '@angular/core';

@Component({
  selector: 'app-libro2-bloque1-semana2',
  templateUrl: './semana2.component.html',
  styleUrls: ['./semana2.component.css']
})
export class Libro2Bloque1Semana2Component {
  titulo = "Un antojo perezoso";
  colorTitulo = "rgb(160, 170, 214)";
  foco1 = "<b class='¿'>¿</b><b>Vas a jugar antes de terminar tus tareas?</b>";
  foco2 = "<b class='¿'>¿</b><b>Alguna vez se han burlado de ti por ser trabajador?</b>";
  colorFoco = "rgb(160, 170, 214)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_2/Bloque_1/Semana_2/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">Hacía mucho sol en el campo y Patoso platicaba con su nueva amiga mariposa:
  —<a class="¿ texto">¿</a>No estarás desperdiciando esta hermosa mañana trabajando? <a class="¿ texto">¿</a>Cómo
  puedes ser tan tonta? ¡Qué flojera! Yo, cuando tengo hambre, bebo todo el
  néctar que se me antoja, ¡pero no malgasto mi tiempo recogiendo miel para
  que se la coman otros!— Patoso agachó la cabeza, pero no contestó porque
  no le gustaba que se rieran de él. —¡Ven conmigo!—, continuó la mariposa. —
  Te enseñaré algo mucho más entretenido. Hay un baile de hadas esta noche
  en el musgo, bajo el gran roble. Necesito pareja y tú eres el adecuado.</p>`;
  parrafo2 = `<p class="texto">La mariposa siguió hablando con su voz chillona: —A las hadas no les interesan
  mucho las abejas, esos bichitos tan cumplidos y aburridos; ¡no saben hacer
  nada más que trabajar y acumular miel para que la usen otros! —Entonces,
  <a class="¿ texto">¿</a>por qué quieres llevarme?, —preguntó Patoso. —¡Bueno!, lo cierto es que
  tampoco me importas mucho, pero tu ropa es muy bonita; siempre me gustó
  el terciopelo marrón, además, necesito a alguien que me acompañe esta
  noche, ¡y tú puedes servir! Patoso aceptó la invitación, seguro se le antojaba
  más divertirse antes que trabajar, lo que no sabía es que su vida de abejorro
  iba a cambiar.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "¿Cómo me siento?";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_2/Bloque_1/Semana_2/Actividad.png";

  bloque = "1";
  actividad_1 = "Colorea la carita que represente cómo te sientes ante las situaciones que se te presentan. Luego, comenta con tus compañeros.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
