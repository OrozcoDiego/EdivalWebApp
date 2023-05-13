import { Component } from '@angular/core';

@Component({
  selector: 'app-libro2-bloque2-semana1',
  templateUrl: './semana1.component.html',
  styleUrls: ['./semana1.component.css']
})
export class Libro2Bloque2Semana1Component {
  titulo = "Camino a mi meta";
  colorTitulo = "rgb(235, 197, 93)";
  foco1 = "<b class='¿'>¿</b><b>Qué dificultades encuentras cuando te propones realizar algo?</b>";
  foco2 = "<b class='¿'>¿</b><b>A quiénes debemos obediencia? </b><b class='¿'>¿</b><b>Por qué es importante obedecer?</b>";
  colorFoco = "rgb(235, 197, 93)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_2/Bloque_2/Semana_1/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">Hace mucho, mucho tiempo, el antiguo pueblo Onondaga vivía al este de
  Norteamérica, cuando emprendió un largo viaje para buscar un mejor
  lugar donde vivir. El sabio jefe tuvo la visión de una región con abundancia
  de manantiales, árboles y animales de caza. El clan escuchó lo que el Gran
  Espíritu señalaba y decidieron emprender el camino sin importar la enorme
  distancia que debían recorrer</p>`;
  parrafo2 = `<p class="texto">Caminaron muchos días, atravesaron territorios salvajes, subieron colinas y
  cruzaron ríos, pasaron aventuras y peligros. Al caer las noches, detenían la
  caminata para levantar campamentos, descansar y compartir las experiencias
  durante el viaje; a la mañana siguiente, con la salida del sol reemprendían el
  camino... Hasta que un día de otoño, llegaron a un hermoso lago, rodeado
  por montañas con bosques de pinos, variedad de árboles frutales, cielo claro,
  aire fresco. Muchos peces y castores nadaban en las aguas y gran variedad
  de animales, venados y osos, bajaban de las colinas para bañarse y beber
  agua. En cuanto llegaron, reconocieron las señales del jefe, se reunieron en la
  orilla del lago y dirigieron plegarias de agradecimiento al Gran Espíritu por
  haberlos protegido en este peregrinar.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "Un paso a la vez";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_2/Bloque_2/Semana_1/Actividad.png";

  bloque = "2";
  actividad_1 = "Rellena el círculo de la respuesta y escribe lo que se pide.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
