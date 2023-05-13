import { Component } from '@angular/core';

@Component({
  selector: 'app-libro1-bloque4-semana4',
  templateUrl: './semana4.component.html',
  styleUrls: ['./semana4.component.css']
})
export class Libro1Bloque4Semana4Component {
  titulo = "Un día de aprendizaje";
  colorTitulo = "rgb(126, 114, 180)";
  foco1 = "<b class='¿'>¿</b><b>Cómo te sientes cuando dices la verdad?</b>";
  foco2 = "<b class='¿'>¿</b><b>Qué personas te motivan a ser sincero?</b>";
  colorFoco = "rgb(126, 114, 180)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_1/Bloque_4/Semana_4/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">La mamá de Sergio quedó asombrada al ver la cantidad de canicas que estaban
  sobre la cama: —¡Felicidades! Sergio la miró y comenzó a contarle lo que había
  sucedido. Su mamá comentó: —En casa te hemos enseñado valores, tú sabes
  lo que está bien y lo que está mal; sabes que todo acto tiene una consecuencia.
  Tienes dos opciones: la primera es dejar las cosas como están y vivir con ese mal
  acto; la otra es sincerarte contigo, reconocer tu error y hablar con tus amigos.
  </p>`;
  parrafo2 = `<p class="texto">Al día siguiente, en el campo de juego lo esperaban Abraham y Daniel: —Ahora
  sí, nuestras canicas. Sergio respondió: —¡Claro!, sólo quiero decir algo. Uno a
  uno, llegaban los niños de la colonia incluyendo a Carolina. Explicó lo sucedido,
  dijo cómo se sentía por su comportamiento y que estaba dispuesto a recibir
  castigo y que sincerarse con ellos lo hacía sentir mejor. Todos se quedaron en
  silencio, mientras Sergio regresaba una a una las canicas que con trampa había
  ganado. Carolina se acercó a él y lo abrazó; sonriente le dijo que era muy valiente
  al reconocer su error y ser sincero con ellos. El silencio se rompió cuando Miguel
  gritó: —¡A jugar! Sergio conservó a sus amigos y sus padres están orgullosos
  porque hizo lo correcto.
  </p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "Sin disfrazar la verdad";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_1/Bloque_4/Semana_4/Actividad.png";

  bloque = "4";
  actividad_1 = "Con una línea; lleva al árbol, sólo las manzanas que contengan un acto de sinceridad.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
