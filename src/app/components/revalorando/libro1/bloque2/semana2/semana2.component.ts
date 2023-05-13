import { Component } from '@angular/core';

@Component({
  selector: 'app-libro1-bloque2-semana2',
  templateUrl: './semana2.component.html',
  styleUrls: ['./semana2.component.css']
})
export class Libro1Bloque2Semana2Component {
  titulo = "El accidente de mamá";
  colorTitulo = "rgb(246, 192, 216)";
  foco1 = "<b class='¿'>¿</b><b>Alguna vez has perdido tus útiles? </b><b class='¿'>¿</b><b>A qué crees que se debe?</b>";
  foco2 = "<b class='¿'>¿</b><b>Haces berrinches cuando debes bañarte?</b>";
  colorFoco = "rgb(246, 192, 216)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_1/Bloque_2/Semana_2/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">Juan el sucio era berrinchudo y desobediente. Sus amigos le decían:
  —¡Juan! Debes bañarte, recortar tus uñas y cuidar tu uniforme para que te
  sientas feliz, ¡háznos caso!, te lo decimos por tu bien. Pero Juan no atendía
  recomendaciones y hasta se molestaba con sus amigos. Un buen día, los
  niños de primero se cansaron de darle buenos consejos y poco a poco se
  alejaron de Juan. En el recreo ya nadie se sentaba a su lado, pues Juan se
  enojaba si le decían que no metiera sus dedos sucios a la comida o podría
  enfermarse.</p>`;
  parrafo2 = `<p class="texto">Al llegar a su casa se puso a pensar que tal vez se quedaría sin amigos por
  su falta de limpieza y de orden pero no le hizo caso a esa idea. Se puso a
  jugar a los cochecitos y al terminar, los dejó tirados en el suelo para irse a ver
  la televisión. Estaba comiendo unas palomitas con las manos sucias, cuando
  escuchó un fuerte ruido: ¡PUM! Su mamá se había resbalado con un cochecito
  y cayó al suelo. Juan corrió asustado a ver cómo estaba su mamá; ella muy
  enojada y adolorida le dijo: —¡Niño desordenado! ¡Sal a jugar al jardín en lo
  que termino de limpiar este desastre! Juan se fue triste, pensando que quizá
  nunca más encontraría alguien para jugar con él.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "Un lugar para cada cosa";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_1/Bloque_2/Semana_2/Actividad.png";

  bloque = "2";
  actividad_1 = "Coloca cada una de las cosas en su lugar para evitar que mamá tenga un accidente; utiliza azul para cosas de la escuela, rojo para juguetes y verde para basura.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
