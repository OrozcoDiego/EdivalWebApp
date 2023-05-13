import { Component } from '@angular/core';

@Component({
  selector: 'app-libro1-bloque3-semana8',
  templateUrl: './semana8.component.html',
  styleUrls: ['./semana8.component.css']
})
export class Libro1Bloque3Semana8Component {
  titulo = "¡Aprender a respetar!";
  colorTitulo = "rgb(167, 131, 188)";
  foco1 = "<b class='¿'>¿</b><b>Sabes ofrecer una disculpa al equivocarte?</b>";
  foco2 = "<b class='¿'>¿</b><b>Dices la verdad aunque tengas miedo?</b>";
  colorFoco = "rgb(167, 131, 188)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_1/Bloque_3/Semana_8/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">A continuación, los tres ositos entraron en el dormitorio. Papá oso vio su cama
  y exclamó con su voz de oso: —<a class="¿ texto">¿</a>Quién se ha acostado en mi cama? Mamá
  oso vio su cama y dijo con voz más suave: —<a class="¿ texto">¿</a>Y quién se ha acostado en la
  mía? El osito pequeño se acercó a su cama y dijo con su voz dulce: —<a class="¿ texto">¿</a>Quién
  está acostado en mi cama? ¡Oh! ¡Es una niña!, —dijo el osito sorprendido.
  Ricitos de Oro se despertó y al abrir los ojos se llevó un buen susto porque a
  los pies de la cama había tres osos cafés y peludos que la miraban molestos,
  pero tristes. La niña sabía que se había equivocado, que no había respetado
  a los osos ni sus cosas, se sentía mal y tenía miedo de que los osos fueran a
  castigarla por su acción negativa.</p>`;
  parrafo2 = `<p class="texto">A partir de esta experiencia, aprendió que debía ser empática para
  comprender y respetar a los demás. Ricitos de oro saltó de la cama, ofreció
  una sincera disculpa, especialmente al pequeño. Sin saber qué más hacer,
  salió corriendo a su casa donde la esperaba su mamá; contó todo lo sucedido
  y su madre, algo molesta, le pidió que reparara el daño a los osos. A partir de
  ahí, Ricitos ya no hizo travesuras en el bosque; más bien, procuraba ayudar
  a quienes encontraba.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "¡Respetaré!";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_1/Bloque_3/Semana_8/Actividad.png";

  bloque = "3";
  actividad_1 = "Encierra en un círculo 3 cosas que de hoy en delante harás para ser alguien más respetuoso.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
