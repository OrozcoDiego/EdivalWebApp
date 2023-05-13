import { Component } from '@angular/core';

@Component({
  selector: 'app-libro2-bloque1-semana3',
  templateUrl: './semana3.component.html',
  styleUrls: ['./semana3.component.css']
})
export class Libro2Bloque1Semana3Component {
  titulo = "El ensayo para el baile";
  colorTitulo = "rgb(0, 183, 216)";
  foco1 = "<b class='¿'>¿</b><b>Eres paciente cuando haces algo?</b>";
  foco2 = "<b class='¿'>¿</b><b>Sabes controlarte ante los demás?</b>";
  colorFoco = "rgb(0, 183, 216)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_2/Bloque_1/Semana_3/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">A Patoso se le hizo fácil salir con su amiga mariposa y más porque él era muy
  caprichoso. En la colmena siempre era el que hacía más berrinches todo el
  tiempo y no obedecía a su reina, porque prefería pasarse el tiempo jugando
  en lugar de trabajar como los demás.</p>`;
  parrafo2 = `<p class="texto">El día estaba perfecto, el sol brillaba en lo alto del campo y se sentía un aire
  refrescante que deshacía las nubes en forma de borreguitos. La mariposa,
  entusiasmada, dijo a Patoso: —Volaremos sobre las praderas y veremos cómo
  es el mundo al otro lado de la colina, ¡nos vamos a divertir mucho! A Patoso le
  gustaba cualquier cosa que le evitara trabajar, así que estuvo encantado de ir
  con la bella mariposa y se marcharon juntos volando sobre los prados.</p>`;
  parrafo3 = `<p class="texto">Estuvieron todo el día jugando y revoloteando y en todo ese tiempo ninguno
  de las dos trabajó ni siquiera un poquito. La pequeña mariposa encontró una
  gran hoja verde de suave superficie y ahí estuvo enseñando a bailar a Patoso:
  —¡Tienes que aprender a bailar para esta noche —le dijo—, o no le gustarás
  nada a las hadas! Y así, pasaron todo el día, dejándose llevar por sus caprichos.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "¿Eres como Patoso?";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_2/Bloque_1/Semana_3/Actividad.png";

  bloque = "1";
  actividad_1 = `Encuentra en la sopa de letras las 5 actitudes de Patoso
  el abejorro perezoso. Luego, escribe en la línea qué puede
  ocasionarte comportarte como él. Sigue el ejemplo.`;

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.lectura.push(this.parrafo3);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
