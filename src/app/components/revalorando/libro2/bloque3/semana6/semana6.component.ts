import { Component } from '@angular/core';

@Component({
  selector: 'app-libro2-bloque3-semana6',
  templateUrl: './semana6.component.html',
  styleUrls: ['./semana6.component.css']
})
export class Libro2Bloque3Semana6Component {
  titulo = "Atento para no perderse";
  colorTitulo = "rgb(244, 135, 42)";
  foco1 = "<b>En una conversación, </b><b class='¿'>¿</b><b>cómo te sientes? </b><b class='¿'>¿</b><b>Escuchas o participas? </b><b class='¿'>¿</b><b>Por qué?</b>";
  foco2 = "<b class='¿'>¿</b><b>Qué podría suceder si no escuchamos a los demás, en clase o en casa?</b>";
  colorFoco = "rgb(244, 135, 42)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_2/Bloque_3/Semana_6/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">En casa, mamá estaba desde su celular enviando mensajes con varios
  familiares para acordar los detalles de la siguiente reunión; la mesa estaba
  dispuesta para la comida, sólo que para esta vez, en el lugar de cada persona
  se encontraba un recipiente de plástico con la porción correspondiente
  para que cada uno pusiera en el microondas y tomara sus alimentos en
  el momento que deseara. Papá necesitaba realizar algunas llamadas y los
  chicos siguiendo el ejemplo de sus padres, se dirigieron a su habitación para
  hablar por teléfono o jugar un ratito. Cada uno en su “retiro” conforme sentía
  hambre, llegaba, calentaba su ración de alimento y podía regresar a su
  habitación para comer allí sin que nadie dijese palabra entre ellos.</p>`;
  parrafo2 = `<p class="texto">Algo estaba sucediendo en este hogar, ya no se cruzaban las miradas ni
  gestos amables, todos parecían disfrutar de una nueva vida, entretenidos en
  su “paquete” de comunicación con quienes estaban lejos de casa. Pasaron así
  algunos días, el diálogo entre la familia se limitaba a indicaciones breves o a
  preguntas con respuesta corta: —Sus loncheras están en la mesa, que les vaya
  bien. —<a class="¿ texto">¿</a>Cómo les fue en la escuela? —¡Bien! —<a class="¿ texto">¿</a>Tienen tarea?, bien, háganla.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "El valor de la";
  actividadTituloParte2 = "comunicación";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_2/Bloque_3/Semana_6/Actividad.png";

  bloque = "3";
  actividad_1 = "Con ayuda de tu maestro(a) participa en las dinámicas.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
    this.actividadTitulo.push(this.actividadTituloParte2);
  }
}
