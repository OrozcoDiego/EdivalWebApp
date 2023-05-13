import { Component } from '@angular/core';

@Component({
  selector: 'app-libro1-bloque1-semana1',
  templateUrl: './semana1.component.html',
  styleUrls: ['./semana1.component.css']
})
export class Libro1Bloque1Semana1Component {
  titulo = "La tarea y a jugar";
  colorTitulo = "rgb(155, 203, 118)";
  foco1 = "<b class='¿'>¿</b><b>Qué actividades realizas por las tardes en casa?</b>";
  foco2 = "<b class='¿'>¿</b><b>Para qué tu maestro(a) deja tarea?</b>";
  colorFoco = "rgb(155, 203, 118)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_1/Bloque_1/Semana_1/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">Sofi estaba haciendo su tarea. Parecía que tenía toda la tarde en lo mismo y no terminaba. 
  Con un suspiro, tomó a Amy, su muñeca favorita y dijo: —¡Ojalá ya pudiera terminar con mi tarea! Dando otro suspiro, dejó 
  a Amy a un lado y tomó su libro de matemáticas, lo abrió en la página que había señalado en su libreta de tareas y… 
  ¡sorpresa! Las actividades y ejercicios ya estaban realizados.</p>`;
  parrafo2 = `<p class="texto">Sofi estaba asombrada, <a class="¿ texto">¿</a>había terminado los ejercicios y no lo recordaba? 
  <a class="¿ texto">¿</a>Los habría hecho en otro día? No lo entendía, pero, la verdad, le daba mucho gusto. —Una menos, —dijo 
  contenta, mientras tomaba el libro de Ciencias Sociales. Abrió el libro en la página que había anotado en su libreta y, de nuevo, 
  lo mismo; el ejercicio ya estaba realizado. Sofi revisó la fecha de su cuaderno de tareas. Era la de hoy, no había equivocación. 
  Revisó también el libro, para asegurarse de que no había tomado por error el de una compañera. Ahí estaba su nombre, claramente 
  escrito. —<a class="¿ texto">¿</a>Estaré desde pequeña perdiendo la memoria?, se preguntó. Pero no duró mucho su preocupación. Al 
  contrario, terminar la tarea antes significaba que tendría más tiempo para jugar. Tomó a Amy y puso manos a la obra.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "Tarea terminada";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_1/Bloque_1/Semana_1/Actividad.png";

  bloque = "1";
  actividad_1 = "Rellena el círculo de la respuesta.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
