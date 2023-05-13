import { Component } from '@angular/core';

@Component({
  selector: 'app-libro1-bloque5-semana4',
  templateUrl: './semana4.component.html',
  styleUrls: ['./semana4.component.css']
})
export class Libro1Bloque5Semana4Component {
  titulo = "Valoro lo que vivo";
  colorTitulo = "rgb(247, 183, 87)";
  foco1 = "<b class='¿'>¿</b><b>Te cuesta reconocer cuando te equivocas? </b><b class='¿'>¿</b><b>Por qué?</b>";
  foco2 = "<b class='¿'>¿</b><b>Para qué algunas personas exageran las cosas que dicen o hacen?</b>";
  colorFoco = "rgb(247, 183, 87)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_1/Bloque_5/Semana_4/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">Cabalgaron y cabalgaron. Se cansaron de cabalgar. La luna llena iluminaba la
  oscuridad de la noche, cuando escucharon un terrible ruido... ¡Algo se movía! ¡Era
  enorme! Y, de pronto… ¡apareció! ¡Era muy grande! ¡Era muy feo! ¡Era el monstruo
  más monstruoso que habían imaginado jamás! ¡Era, era… un elefante gigante!
  Los príncipes valientes, sabían que debían vencerlo. ¡Era tan grande! ¡Y ellos, tan
  pequeños! Empuñaron su espada, se acercaron al gigante, y vieron algo muy
  extraño. El temible elefante era grande ¡sí!; era feo ¡sí! Pero sus ojos, sus ojos eran
  muy tiernos. Aunque por fuera parecía ser un monstruo feo y aterrador, por
  dentro era tierno y dulce. Ambos, decidieron llevarlo a casa, al castillo.</p>`;
  parrafo2 = `<p class="texto">Con la luz del nuevo día, mostraron a los aldeanos que se trataba sólo de
  un singular elefante y cómo los sabios “ciegos” al no ponerse de acuerdo,
  defendiendo cada uno la parte que había tocado, como si se fuera la verdad
  total y absoluta, habían creado una terrorífica historia. Así, la aldea se libró del
  monstruo que los asustaba. Todos estaban muy felices. Celebraron con una
  gran fiesta. Y así terminó la aventura de los príncipes valientes y el temible
  monstruo gigante.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "Conozco mi lugar";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_1/Bloque_5/Semana_4/Actividad.png";

  bloque = "5";
  actividad_1 = "Identifica las características del lugar donde vives.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
