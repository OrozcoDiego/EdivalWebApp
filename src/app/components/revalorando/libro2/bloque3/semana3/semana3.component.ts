import { Component } from '@angular/core';

@Component({
  selector: 'app-libro2-bloque3-semana3',
  templateUrl: './semana3.component.html',
  styleUrls: ['./semana3.component.css']
})
export class Libro2Bloque3Semana3Component {
  titulo = "Buenas intenciones";
  colorTitulo = "rgb(0, 179, 228)";
  foco1 = "<b class='¿'>¿</b><b>Cómo es tu trato con tus papás y hermanos?</b>";
  foco2 = "<b class='¿'>¿</b><b>Te has dado cuenta cómo es el trato en las familias de tus compañeros?</b>";
  colorFoco = "rgb(0, 179, 228)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_2/Bloque_3/Semana_3/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">Cuando Miguel escuchaba a su hermana mayor platicarle cómo le había
  ido con su trabajo escolar y las recomendaciones que le hacía, se le ocurrió
  preguntarle: —Lety, <a class="¿ texto">¿</a>cómo puede hacerle mi amigo Ulises? —Y <a class="¿ texto">¿</a>qué pasa con
  él? —Pues no sé bien, pero me dijo que ya no lo dejarían entrar a la escuela
  si vuelve a llegar tarde. —¡Ay Miguel!, tú siempre queriendo ayudar a todo el
  mundo. Eso no es sencillo, él tiene que organizarse junto con sus papás.</p>`;
  parrafo2 = `<p class="texto">En el auto siguieron la conversación y preguntaron a papá qué recomendaba:
  —Mira, Miguel, entiendo lo que pasa con tu amigo, pero no creo que nosotros
  podamos hacer algo; te das cuenta que en casa, cada uno nos organizamos
  para respetar el tiempo de los demás y llegar puntuales, ustedes a la escuela
  y yo al trabajo. Eso es algo que la familia de Ulises debe arreglar. —¡Pero papá!,
  yo quiero ayudar, <a class="¿ texto">¿</a>tú pudieras hablar con ellos? El papá de Miguel pensó que
  no conoce tanto al papá de Ulises como para hablar con él de este asunto
  familiar que pudiera resultar incómodo para ambos, así que aprovechó que
  Miguel se distrajo con un espectacular que promovía la oferta de un paquete
  de telefonía celular, para cambiar el tema.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "Trato bien a todos";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_2/Bloque_3/Semana_3/Actividad.png";

  bloque = "3";
  actividad_1 = "Rellena el círculo de la respuesta y escribe lo que se pide.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
