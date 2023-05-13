import { Component } from '@angular/core';

@Component({
  selector: 'app-libro2-bloque1-semana8',
  templateUrl: './semana8.component.html',
  styleUrls: ['./semana8.component.css']
})
export class Libro2Bloque1Semana8Component {
  titulo = "Mejor dominarse que dejarse llevar";
  colorTitulo = "rgb(211, 211, 37)";
  foco1 = "<b class='¿'>¿</b><b>Terminas todo lo que empiezas?</b>";
  foco2 = "<b class='¿'>¿</b><b>Te gusta ayudar a los demás en sus obligaciones?</b>";
  colorFoco = "rgb(211, 211, 37)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_2/Bloque_1/Semana_8/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">Con el invierno no había comida... Mariposa abandonó a Patoso porque
  emigró para buscar calor, mientras que nuestro abejorro empezó a morir
  de hambre. Ya no podía volver a la colmena, ¡la reina lo había corrido! Fue
  con las flores a pedir refugio pero todas estaban apagadas por el frío. La
  ardilla del bosque tampoco le dio hospedaje. ¡Estaba acabado! Llegó como
  pudo a la casa de las hadas, tocó la puerta y pidió que lo dejaran entrar,
  aunque fuera para ganarse la comida. Patoso comenzó a trabajar para las
  hadas. Todo el invierno estuvo haciendo para ellas chalequitos de terciopelo
  marrón como el suyo. Pero cuando al fin volvió la primavera, la reina lo envió
  de vuelta a la colmena. —Ve a decirle a tu reina que ahora ya sabes trabajar,
  aquí tienes todos los chalequitos que nos has hecho. Llévalos como regalo
  para las otras abejas y así se alegrarán de verte. Patoso regresó a ver a su
  propia reina y todos se pusieron muy contentos al verlo de nuevo, porque
  ahora sabía trabajar ¡y además había traído un chaleco nuevo de terciopelo
  marrón para cada abeja! A partir de entonces, Patoso recorría los prados
  recogiendo miel todos los días y se sentía muy feliz, porque las abejas son
  más felices cuando trabajan.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "Me comprometo a...";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_2/Bloque_1/Semana_8/Actividad.png";

  bloque = "1";
  actividad_1 = "Completa las frases.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
