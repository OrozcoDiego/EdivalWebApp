import { Component } from '@angular/core';

@Component({
  selector: 'app-libro2-bloque3-semana7',
  templateUrl: './semana7.component.html',
  styleUrls: ['./semana7.component.css']
})
export class Libro2Bloque3Semana7Component {
  titulo = "Detalles importantes";
  colorTitulo = "rgb(247, 173, 181)";
  foco1 = "<b class='¿'>¿</b><b>Qué haces cuando te das cuenta de tus errores? </b><b class='¿'>¿</b><b>Y cuando alguien te los hace ver?</b>";
  foco2 = "<b class='¿'>¿</b><b>Será fácil o difícil hacer las cosas bien? </b><b class='¿'>¿</b><b>Por qué?</b>";
  colorFoco = "rgb(247, 173, 181)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_2/Bloque_3/Semana_7/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">Un día en la escuela, Miguel quiso buscar a su amigo Ulises para mostrarle
  un nuevo juego que recién descubrió… Pero no estaba en la escuela, acumuló
  suficientes retardos a la hora de entrada y para motivar el hábito de la
  puntualidad lo regresaron a su casa. Hasta ese momento Miguel comenzó
  a darse cuenta de cuánto se estaba alejando de las metas y personas que
  quería y de cómo había prometido a Ulises que él le ayudaría y no estaba
  haciendo las cosas que le importaban y daban sentido a su amistad.</p>`;
  parrafo2 = `<p class="texto">Ese mismo día, a la hora de salida de la escuela, tuvo que buscar a su hermana
  Leticia quien estaba con sus amigas, pues ya no se encontraban en el lugar de
  siempre para esperar a juntos a papá; platicaron lo que estaba sucediéndoles.
  Claro que querían tener sus celulares pero sin saber cómo, se encontraron
  secuestrados por ellos mismos. De camino a casa en el auto de papá, le pidieron
  que recuperaran las charlas que solían mantener, que se sentían raros, como
  extraños, las comidas “cada uno en su lugar” no sabían bien. Miguel retomó
  con su papá el compromiso para platicar con la familia de Ulises y ayudarles a
  organizarse para que regresara a la escuela.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "¡Las palabras mágicas!";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_2/Bloque_3/Semana_7/Actividad.png";

  bloque = "3";
  actividad_1 = "Identifica algunos sentimientos, cómo influyen en ti y en los demás.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
