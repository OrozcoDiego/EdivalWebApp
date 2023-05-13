import { Component } from '@angular/core';

@Component({
  selector: 'app-libro2-bloque1-semana5',
  templateUrl: './semana5.component.html',
  styleUrls: ['./semana5.component.css']
})
export class Libro2Bloque1Semana5Component {
  titulo = "Un perezoso bailarín";
  colorTitulo = "rgb(125, 189, 66)";
  foco1 = "<b class='¿'>¿</b><b>Alguna vez te has sentido feliz haciendo travesuras?</b>";
  foco2 = "<b class='¿'>¿</b><b>Alguien te ha corregido cuando lo necesitas? <b/><b class='¿'>¿</b><b>Qué piensas de eso?</b>";
  colorFoco = "rgb(125, 189, 66)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_2/Bloque_1/Semana_5/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">El baile de las hadas seguía y Patoso se divertía mucho. Su chalequito de
  terciopelo marrón era una atracción, todas las hadas y mariposas lo veían
  con ganas de usarlo por un momento. Ya era muy de noche y aún así la
  fiesta seguía en el gran salón.</p>`;
  parrafo2 = `<p class="texto">—<a class="¿ texto">¿</a>Quién es ese bichito de marrón? —preguntó la reina, lanzando una aguda
  mirada desde su trono al extremo del salón. —Es Patoso, el amigo de Mariposa,
  contestó un hada que estaba a su lado. —Ve a decirle que se acerque, ordenó
  la reina, ¡quiero bailar con él! El hada fue a toda prisa por nuestro perezoso
  abejorro, quien se olvidó de sus obligaciones y se puso a bailar. Al llegar junto
  a Patoso, el hada lo tomó de una de sus alitas y lo llevó frente a la reina de
  las hadas. Así que Patoso bailó con el hada reina y se sintió más orgulloso y
  feliz de lo que nunca había estado. Y cuando al final acabó el baile y todas
  las hadas ya se habían marchado, se fue a dormir en una flor de malva real
  y soñó con todo lo que había pasado. No obstante, a la mañana siguiente se
  acordó de su propia reina y regresó apresuradamente a la colmena. Pero la
  pequeña mariposa no pareció muy contenta de que lo hiciera.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "¿Cómo puedo mejorar?";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_2/Bloque_1/Semana_5/Actividad.png";

  bloque = "1";
  actividad_1 = "Lleva a la abejita trabajadora de regreso a su colmena lo más rápido que puedas!";
  actividad_2 = "Escribe tres cosas que pueden ser un obstáculo en tu vida para lograr tus metas.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
