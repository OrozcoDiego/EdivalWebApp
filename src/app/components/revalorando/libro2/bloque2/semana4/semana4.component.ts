import { Component } from '@angular/core';

@Component({
  selector: 'app-libro2-bloque2-semana4',
  templateUrl: './semana4.component.html',
  styleUrls: ['./semana4.component.css']
})
export class Libro2Bloque2Semana4Component {
  titulo = "Obedecer evita errores";
  colorTitulo = "rgb(177, 211, 116)";
  foco1 = "<b class='¿'>¿</b><b>Cómo te sientes cuando no haces caso a tus papás? </b><b class='¿'>¿</b><b>Y cómo cuando sí?</b>";
  foco2 = "<b class='¿'>¿</b><b>Los hijos deben obedecer, o los padres deben cumplir a sus hijos lo que quieren?</b>";
  colorFoco = "rgb(177, 211, 116)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_2/Bloque_2/Semana_4/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">Los adultos de la aldea quedaron por un momento desconcertados por
  lo que escuchaban decir a la mujer que vio cómo los niños se elevaban al
  cielo. Los padres salieron llevando comida y gritaban: —Hijos, aquí hay carne
  de venado, de oso, hay pescado y frutas para todos, vuelvan, tomen estos
  alimentos —suplicaban los padres llorando. Pero ninguno de los niños regresó.
  Sólo uno, agachó la cabeza, miró hacia abajo y en su caída se convirtió en
  estrella fugaz. Los demás alcanzaron el cielo y formaron la constelación de la
  Utcuata, ese grupo de siete estrellas pequeñas que todas las noches brillan
  en el firmamento y que también se llaman las Pléyades.</p>`;
  parrafo2 = `<p class="texto">En las noches, cundo se ve una estrella fugaz, los Onondaga recuerdan
  esta historia, miran hacia la Utcuata y saben que son un grupo de niños
  que no deja de danzar. Cuentan a sus hijos cómo sucedió esto a quienes no
  escucharon consejos de los mayores y, pretendiendo sólo entretenerse en
  lo que querían, no organizaron sus actividades y alejándose de sus deberes,
  no aprendieron otras artes, actividades y trabajos para vivir en armonía con
  sus padres, en comunidad y disfrutar la vida en la hermosa tierra que los
  abuelos nos dejaron.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "Valorar lo que se tiene";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_2/Bloque_2/Semana_4/Actividad.png";

  bloque = "2";
  actividad_1 = "En su peregrinar, los Onondaga distinguieron varios tipos de paisaje. Relaciona la imagen con su concepto.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
