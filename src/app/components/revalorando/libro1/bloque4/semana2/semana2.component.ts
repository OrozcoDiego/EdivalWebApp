import { Component } from '@angular/core';

@Component({
  selector: 'app-libro1-bloque4-semana2',
  templateUrl: './semana2.component.html',
  styleUrls: ['./semana2.component.css']
})
export class Libro1Bloque4Semana2Component {
  titulo = "Malas compañías";
  colorTitulo = "rgb(0, 186, 194)";
  foco1 = "<b>Cuando alguien te propone hacer algo que sabes que no es correcto <b class='¿'>¿</b>qué haces?</b>";
  foco2 = "<b class='¿'>¿</b><b>Qué tan importante es jugar honestamente?</b>";
  colorFoco = "rgb(0, 186, 194)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_1/Bloque_4/Semana_2/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">Sergio pensativo, se sentó en una piedra que estaba cerca de su casa. Analizaba
  lo que había sucedido, cuando se acercaron burlonamente Abraham y Daniel
  que habían disfrutado con la derrota para preguntarle: —<a class="¿ texto">¿</a>Qué te pasó?,
  <a class="¿ texto">¿</a>te dejaste ganar? —¡Nooo! —respondió Sergio— Carolina juega muy bien.
  —<a class="¿ texto">¿</a>Quieres recuperar tus canicas?, nosotros sabemos cómo hacer para que
  vuelvas a tenerlas.
  </p>`;
  parrafo2 = `<p class="texto">Aunque Sergio sabía que Abraham y Daniel eran niños tramposos y todos en
  la colonia lo sabían, el deseo de recuperar sus canicas lo motivó a escuchar
  la propuesta. Camino a casa, se preguntaba: “<a class="¿ texto">¿</a>Hacer trampa?”, “¡engañar!”…
  Sergio era un niño que vivía valores; sus padres le habían inculcado buenos
  hábitos…, dudaba si lo que haría sería correcto. Mientras entraba en su casa,
  era tanta la inquietud que sentía, que no quiso cenar con su familia, se dirigió
  pensativo directamente a su habitación. Al día siguiente, como había quedado
  con Abraham y Daniel, se encontraron con sus amigos en el campo de juego
  para iniciar a jugar canicas entre todos. Abraham se acercó a Sergio para
  preguntarle: —<a class="¿ texto">¿</a>Entonces qué?, lo vamos a hacer <a class="¿ texto">¿</a>verdad?, Sergio dudó un
  momento… pero al final, respondió: —¡Sí…, hagámoslo!
  </p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "Ante la derrota";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_1/Bloque_4/Semana_2/Actividad.png";

  bloque = "4";
  actividad_1 = "Encierra en un círculo la respuesta correcta.";
  
  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
