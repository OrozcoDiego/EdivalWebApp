import { Component } from '@angular/core';

@Component({
  selector: 'app-libro1-bloque2-semana4',
  templateUrl: './semana4.component.html',
  styleUrls: ['./semana4.component.css']
})
export class Libro1Bloque2Semana4Component {
  titulo = "¡Ordenado, limpio y con amigos!";
  colorTitulo = "rgb(177, 211, 116)";
  foco1 = "<b class='¿'>¿</b><b>Cómo te sientes cuando encuentras tus cosas en su lugar?</b>";
  foco2 = "<b class='¿'>¿</b><b>Crees que las personas limpias son felices? </b><b class='¿'>¿</b><b>Por qué?</b>";
  colorFoco = "rgb(177, 211, 116)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_1/Bloque_2/Semana_4/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">—¡No quiero ser como las cucarachas! Quiero ser un niño limpio, saludable
  y ordenado mamá; por favor ¡ayúdame! La mamá de Juan le preparó la
  ducha, Juan se bañó y hasta lodo se hacía el agua que caía. Se recortó las
  uñas que salían disparadas de tan largas y duras que estaban, por fin se
  lavó los dientes que quedaron blancos de nuevo. Esa noche durmió muy
  bien y estaba impaciente por ir a la escuela al día siguiente.</p>`;
  parrafo2 = `<p class="texto">Cuando despertó, ordenó sus útiles, su mochila parecía nueva; se puso su
  uniforme, aseó sus zapatos... ¡Era un niño limpio y organizado! Llegó a la
  escuela y nadie lo reconocía; justo ese día la maestra realizó un concurso
  sorpresa de limpieza y ¡Juan se ganó el premio! Al llegar a casa, salió al
  jardín con cuidado de no ensuciarse; encontró a la ardilla y al gato, quienes
  se acercaron para jugar con él. Pronto, recuperó a sus amigos, ganó el
  premio de orden y limpieza en la escuela ¡y lo mejor!, ninguna cucaracha
  se le acercaba ya. Aprendió que con limpieza y orden se vive mejor, con
  mayor salud y también que disfruta con alegría más tiempo. A partir de esa
  experiencia, ¡hasta le gustaba bañarse y ordenar sus cosas!</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "¡Let’s clean it!";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_1/Bloque_2/Semana_4/Actividad.png";

  bloque = "2";
  actividad_1 = "Utiliza tus conocimientos de la clase de inglés y ordena cada palabra con el artículo de limpieza correspondiente. Colorea los dibujos.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
