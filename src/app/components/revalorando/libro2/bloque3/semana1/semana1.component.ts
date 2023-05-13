import { Component } from '@angular/core';

@Component({
  selector: 'app-libro2-bloque3-semana1',
  templateUrl: './semana1.component.html',
  styleUrls: ['./semana1.component.css']
})
export class Libro2Bloque3Semana1Component {
  titulo = "Un día normal";
  colorTitulo = "rgb(147, 135, 192)";
  foco1 = "<b class='¿'>¿</b><b>Cómo te sientes atendido por tu familia? </b><b class='¿'>¿</b><b>Por qué, qué hacen?</b>";
  foco2 = "<b class='¿'>¿</b><b>Qué haces para que tus familiares y compañeros se sientan bien?</b>";
  colorFoco = "rgb(147, 135, 192)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_2/Bloque_3/Semana_1/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">—Hijo, mi niño, ya es hora de levantarte, que tengas un buen día —con un beso
  la mamá se acercó a la cama de su pequeño para despertarlo. —Gracias
  mamá, ¡buen día! El niño se levantó, se aseó y cambió su ropa de dormir
  para dejarla doblada junto a la almohada y sus sandalias acomodadas bajo
  la cama. El día anterior había ordenado su uniforme y mochila listos para no
  perder tiempo en la mañana buscándolos; así que pronto bajó para tomar
  el desayuno en compañía de sus papás y su hermana.</p>`;
  parrafo2 = `<p class="texto">Todos estaban a la mesa y ahí se enteró de que su hermana presentaría con
  su equipo de compañeros un interesante trabajo sobre la vida de animales
  en peligro de extinción. Agradeciendo los alimentos a mamá, se despidieron
  y papá los llevó a la escuela. Salieron con tiempo para anticipar el tránsito
  local; de camino en el auto, papá aprovechó para conversar con sus hijos
  y desearles un buen día y recomendar, que atiendan a sus maestros para
  aprender y convivir en forma adecuada con sus compañeros. Llegando a la
  escuela, la hermana mayor acompañó a su hermano a su aula y acordaron
  encontrarse a la hora de salida para esperar juntos a papá.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "Convivir para aprender";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_2/Bloque_3/Semana_1/Actividad.png";

  bloque = "3";
  actividad_1 = "Rellena el círculo de la respuesta.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
