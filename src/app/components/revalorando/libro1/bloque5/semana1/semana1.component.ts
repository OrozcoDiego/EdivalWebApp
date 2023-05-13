import { Component } from '@angular/core';

@Component({
  selector: 'app-libro1-bloque5-semana1',
  templateUrl: './semana1.component.html',
  styleUrls: ['./semana1.component.css']
})
export class Libro1Bloque5Semana1Component {
  titulo = "Aprendo para la vida";
  colorTitulo = "rgb(239, 152, 193)";
  foco1 = "<b class='¿'>¿</b><b>Reniegas por las materias y tareas que debes aprender? </b><b class='¿'>¿</b><b>Por qué?</b>";
  foco2 = "<b class='¿'>¿</b><b>Cómo puedes disfrutar y que te gusten las tareas que necesitas hacer?</b>";
  colorFoco = "rgb(239, 152, 193)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_1/Bloque_5/Semana_1/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">Hace ya tiempo que esta historia sucedió, pero aún se sigue contando para
  recordar la astucia de dos príncipes que siendo niños enfrentaron con decisión
  y valentía las responsabilidades propias a la dignidad de su nobleza. La familia
  real vivía en una hermosa y tranquila comarca de la que dependían varias
  aldeas vecinas. Todo el reino disfrutaba de la paz y la armonía con la que el justo
  Rey Rafa gobernaba aquella región. La princesa Leonor y el príncipe Rodrigo
  eran educados con la sabiduría de su madre Beatriz, la Reina Paciente, quien los
  formaba en las habilidades del servicio a su pueblo.
  </p>`;
  parrafo2 = `<p class="texto">Los príncipes crecían en deseos de ayudar a los necesitados, como sus
  bondadosos padres. Por las mañanas, los dos hermanos disfrutaban de alegres
  cabalgatas en sus corceles, la veloz Tormenta y el ágil Chillante. De regreso, en
  el castillo, se alimentaban sanamente y atendían las materias de aprendizaje
  de aquella época, como la exploración de territorios y de las estrellas y la vida
  de plantas y animales. Todas estas lecciones requerían de la observación y del
  trabajo atento y cuidadoso… Sin saberlo, el estudio de su entorno los estaba
  preparando para conquistar la tarea en favor de su gente.
  </p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "Aprecio lo que aprendo";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_1/Bloque_5/Semana_1/Actividad.png";

  bloque = "5";
  actividad_1 = "Rellena el círculo de la respuesta y escribe lo que se pide.";
  
  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
