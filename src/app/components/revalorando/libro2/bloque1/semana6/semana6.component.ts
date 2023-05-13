import { Component } from '@angular/core';

@Component({
  selector: 'app-libro2-bloque1-semana6',
  templateUrl: './semana6.component.html',
  styleUrls: ['./semana6.component.css']
})
export class Libro2Bloque1Semana6Component {
  titulo = "¡Quédate conmigo!";
  colorTitulo = "rgb(237, 131, 181)";
  foco1 = "<b class='¿'>¿</b><b>Te han llamado la atención por divertirte?</b>";
  foco2 = "<b class='¿'>¿</b><b>Qué piensas de aquellos que sólo quieren jugar?</b>";
  colorFoco = "rgb(237, 131, 181)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_2/Bloque_1/Semana_6/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">La mariposa estaba triste y enojada porque Patoso quería volver a su
  casa, por lo que le preguntó: —<a class="¿ texto">¿</a>Por qué tienes que volver a esa mugrienta
  colmena? —preguntó. —Tu ropa es tan bonita como siempre y a todas las
  hadas les gustas. Además, dentro de unas noches el rey y la reina reúnen a
  la corte y otra vez será muy divertido. ¡Quédate conmigo y sé feliz! Patoso lo
  estaba deseando, así que a partir de ese día con la mariposita no hizo nada
  más que jugar, no pensó en nada que no fuera agradable, porque los días
  del verano eran cálidos, luminosos y el invierno se veía muy lejano. Las flores
  rojas de los tréboles se agitaban y le hacían señas.</p>`;
  parrafo2 = `<p class="texto">Decidió regresar a la colmena para que las abejas conocieran a su nueva
  “amiga” la mariposa, quien nada más lo hacía perder el tiempo. Las flores
  también le llamaban para que se posara en ellas a recoger su néctar, pero
  Patoso pasaba de largo volando y simulaba no oírles. Iba llegando a la colmena
  mientras las otras abejas lo miraban y sacudían la cabeza. Una de ellas contó
  a la reina lo que Patoso estaba haciendo. Entonces, la propia reina salió de la
  colmena para hablar con él y todas las demás abejas salieron con ella.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "¡Carrera a la colmena!";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_2/Bloque_1/Semana_6/Actividad.png";

  bloque = "1";
  actividad_1 = "Con ayuda de tu maestro(a) participa en la dinámica.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
