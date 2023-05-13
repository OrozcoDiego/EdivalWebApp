import { Component } from '@angular/core';

@Component({
  selector: 'app-libro1-bloque2-semana1',
  templateUrl: './semana1.component.html',
  styleUrls: ['./semana1.component.css']
})
export class Libro1Bloque2Semana1Component {
  titulo = "El niño que no quería bañarse";
  colorTitulo = "rgb(176, 206, 71)";
  foco1 = "<b class='¿'>¿</b><b>Te gusta ser limpio?</b>";
  foco2 = "<b class='¿'>¿</b><b>Qué piensas de las personas que son desordenadas?</b>";
  colorFoco = "rgb(176, 206, 71)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_1/Bloque_2/Semana_1/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">Esta es la historia de un niño muy pero muy sucio. Su nombre era Juan, pero
  todos le decían “Juan el sucio”, porque nunca quería bañarse. Tenía las uñas
  largas y llenas de mugre. No se lavaba los dientes porque le daba flojera y
  sus rodillas estaban negras de tanto jugar en el piso con los cochecitos. Su
  mamá lo regañaba todo el tiempo pero Juan se hacía el sordo y no le hacía
  caso. A él no le gustaba ser ordenado. Siempre que jugaba a algo, dejaba
  todos sus juguetes desordenados, ¡hasta su perro Manchas se tropezaba con
  los muñecos de acción de su amo!</p>`;
  parrafo2 = `<p class="texto">En la escuela, sus compañeros ya no sabían qué hacer para convencerlo de
  que debía bañarse y ser ordenado. Siempre perdía sus colores, sus lápices
  y ¡hasta sus cuadernos! Se tardaba mucho queriendo encontrar el sándwich
  que mamá le preparaba para el recreo, porque su mochila era un verdadero
  basurero. La maestra Julia le llamaba la atención, pero Juan se enojaba y
  no hacía caso cuando le pedía que se lavara las manos o que guardara sus
  útiles. Pero un día… las cosas serán diferentes para Juan, algo sucederá para
  que entienda, que es mejor ser ordenado y aseado.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "¿Qué es mejor?";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_1/Bloque_2/Semana_1/Actividad.png";

  bloque = "2";
  actividad_1 = "Observa las siguientes imágenes y colorea en cada par la situación que creas que es mejor.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
