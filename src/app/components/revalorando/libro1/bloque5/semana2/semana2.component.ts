import { Component } from '@angular/core';

@Component({
  selector: 'app-libro1-bloque5-semana2',
  templateUrl: './semana2.component.html',
  styleUrls: ['./semana2.component.css']
})
export class Libro1Bloque5Semana2Component {
  titulo = "Tengo confianza";
  colorTitulo = "rgb(255, 213, 89)";
  foco1 = "<b class='¿'>¿</b><b>Qué retos tienes que cumplir? </b><b class='¿'>¿</b><b>Mantienes la calma?</b>";
  foco2 = "<b class='¿'>¿</b><b>Tus papás y maestros necesitan recordarte tus responsabilidades?</b>";
  colorFoco = "rgb(255, 213, 89)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_1/Bloque_5/Semana_2/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">Una mañana el príncipe Rodrigo y la princesa Leonor cabalgaron hacia una
  lejana aldea situada hacia el oriente del reino para conversar con la gente.
  Las personas estaban muy asustadas, aseguraban que un monstruo estaba
  aterrorizando a todos. Cuando los príncipes preguntaron cómo era el monstruo,
  nadie podía contestar con certeza: —¡Es muy grande! —¡Es muy feo! Era todo lo
  que decían a los niños príncipes. Pronto la noticia corrió por toda la comarca.
  Todos sabían que un terrible monstruo asolaba la región. Nadie quería salir de
  su casa. Nadie quería visitar el reino. Todos tenían miedo del terrible monstruo.
  Había que hacer algo y había que hacerlo pronto.</p>`;
  parrafo2 = `<p class="texto">—Nuestro padre el Rey Rafa, está demasiado ocupado organizando las
  tareas de las personas del reino como para dirigir la cacería del monstruo
  —dijo Rodrigo. —Es verdad y nuestra madre la Reina Beatriz, tiene muchas
  ocupaciones, tampoco ella podrá animar la cacería del monstruo —añadió
  Leonor. Así que, mirándose a los ojos, tomaron el valor en sus rostros y sintiendo
  la responsabilidad por la seguridad de la gente, montaron sus corceles y
  salieron en busca del gigantesco y horrible monstruo.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "Trabajo con valentía";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_1/Bloque_5/Semana_2/Actividad.png";

  bloque = "5";
  actividad_1 = "Rellena el círculo de la respuesta y escribe lo que se pide.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
