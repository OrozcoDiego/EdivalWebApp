import { Component } from '@angular/core';

@Component({
  selector: 'app-libro2-bloque1-semana7',
  templateUrl: './semana7.component.html',
  styleUrls: ['./semana7.component.css']
})
export class Libro2Bloque1Semana7Component {
  titulo = "¡Debió haberse controlado!";
  colorTitulo = "rgb(238, 114, 123)";
  foco1 = "<b class='¿'>¿</b><b>Alguna vez te has arrepentido por no cumplir tus obligaciones?</b>";
  foco2 = "<b class='¿'>¿</b><b>Qué crees que se necesite para dejar de ser caprichoso?</b>";
  colorFoco = "rgb(238, 114, 123)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_2/Bloque_1/Semana_7/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">—<a class="¿ texto">¿</a>Qué estás haciendo, Patoso? —preguntó la reina— creímos que estabas
  muerto. —¡No!, contestó Patoso, muerto no, ¡sólo me estoy divirtiendo! —Y si
  ahora no trabajas, ¿qué harás cuando llegue el invierno? —preguntó la reina.
  Patoso agachó la cabeza, porque no sabía qué responder. Pero la mariposa
  se burló: —¡El invierno está muy lejos! —dijo con su vocecita suave y volvió a
  reír. Entonces la reina se puso furiosa. —¡No vuelvas nunca a la colmena!, ¡no
  queremos abejas que no trabajen! Le dio la espalda a Patoso y entró en la
  colmena, seguida de todas las demás abejas. Pero a Patoso no le importó
  nada, porque los días eran todavía cálidos y luminosos y el invierno parecía
  muy lejano.</p>`;
  parrafo2 = `<p class="texto">Todas las mañanas junto a la mariposa, jugaba en las soleadas praderas y
  cuando oscurecía, los ruiseñores cantaban su canción de buenas noches al
  mundo y se mecían para dormirse en las flores de malva real, descansando
  hasta el día siguiente. Pero llegó el día en que se fue el sol y las noches se
  hicieron cada vez más oscuras y frías. Las hadas ya no volvieron a bailar
  en el musgo bajo el gran roble y las luciérnagas ya no alumbraban con sus
  colas. El invierno llegó y Patoso empezó a pasar hambre.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "Especies que nos ayudan";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_2/Bloque_1/Semana_7/Actividad.png";

  bloque = "1";
  actividad_1 = "Exploremos la naturaleza y con ayuda de nuestros padres o maestros, investiguemos 3 especies que ayudan a la vida de los humanos. ¡Sigue el ejemplo!";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
