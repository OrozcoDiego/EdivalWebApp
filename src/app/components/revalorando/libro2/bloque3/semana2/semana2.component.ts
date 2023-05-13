import { Component } from '@angular/core';

@Component({
  selector: 'app-libro2-bloque3-semana2',
  templateUrl: './semana2.component.html',
  styleUrls: ['./semana2.component.css']
})
export class Libro2Bloque3Semana2Component {
  titulo = "Una charla “diferente”";
  colorTitulo = "rgb(247, 185, 41)";
  foco1 = "<b class='¿'>¿</b><b>Algún amigo se preocupa por ti? </b><b class='¿'>¿</b><b>Qué hace? </b><b class='¿'>¿</b><b>Cómo te hace sentir?</b>";
  foco2 = "<b class='¿'>¿</b><b>Qué actividades compartes con compañeros y hermanos?</b>";
  colorFoco = "rgb(247, 185, 41)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_2/Bloque_3/Semana_2/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">En la escuela, a la hora de recreo, Miguel se acercó para platicar con su amigo
  Ulises. —<a class="¿ texto">¿</a>Qué pasó Ulises, qué te entregó el maestro? —Me dio un reporte para
  que mañana lo traiga firmado por mis papás, porque llegué tarde otra vez.
  Pero eso no me importa, ya me ha dado varios recados, mis papás trabajan
  mucho y dicen que no pueden traerme a tiempo. —<a class="¿ texto">¿</a>Que podría pasar si llegas
  tarde otra vez? —Dice el maestro, que hablará con el director y que no me
  dejarán entrar a la escuela. —Y <a class="¿ texto">¿</a>qué harías si no vienes a la escuela? —No sé,
  quedarme en casa. —Pero te atrasarías con las tareas y en los exámenes quizá
  no te irá bien. —Pues sí, pero qué puedo hacer. Los chicos siguieron platicando
  y Miguel compartió el almuerzo con su amigo porque la mamá no alcanzó a
  preparar nada y el papá, con las prisas, olvidó darle dinero.</p>`;
  parrafo2 = `<p class="texto">Miguel apreciaba a su amigo y se quedó pensando cómo ayudarlo. Cuando
  terminó el día en la escuela, encontró a su hermana Leticia, le dijo que le
  había ido muy bien en su exposición y le recomendó cómo podía hacer para
  que en sus trabajos también obtuviera buenas calificaciones. A Miguel se le
  iluminaron los ojos, tenía una idea…</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "Me preocupo por los demás";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_2/Bloque_3/Semana_2/Actividad.png";

  bloque = "3";
  actividad_1 = "Rellena el círculo de la respuesta.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
