import { Component } from '@angular/core';

@Component({
  selector: 'app-libro1-bloque1-semana3',
  templateUrl: './semana3.component.html',
  styleUrls: ['./semana3.component.css']
})
export class Libro1Bloque1Semana3Component {
  titulo = "Soñar y probar";
  colorTitulo = "rgb(69, 186, 209)";
  foco1 = "<b class='¿'>¿</b><b>Qué haces cuando algo no resulta como te gustaría?</b>";
  foco2 = "<b class='¿'>¿</b><b>Qué desearías que se resolviera como por arte de magia?</b>";
  colorFoco = "rgb(69, 186, 209)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_1/Bloque_1/Semana_1/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">Sofi volteada hacia una pared de su cuarto repetía lentamente: —”Quechas… 
  quechas…. quechas”. Cuando su mamá le habló para cenar, Sofi corrió presurosa. —<a class="¿ texto">¿</a>Qué hiciste de cenar, mamá? 
  Pero la respuesta no fue la esperada. —Taquitos de frijoles. ¡Qué decepción! Parecía que, después de todo, no 
  había magia. Sofi se comió su taquito con un poco de resignación y serenidad. Esa noche, Sofi tardó en dormirse. 
  Las quesadillas eran fáciles de explicar, mamá sabía que le gustaban mucho y las hacía con alguna frecuencia. 
  Pero… <a class="¿ texto">¿</a>y la tarea? <a class="¿ texto">¿</a>Cómo explicar que la tarea ya estaba hecha? Así, pensativa, finalmente se durmió.</p>`;
  parrafo2 = `<p class="texto">A la mañana siguiente, mientras se vestía, Sofi volteó con Amy. —Voy a hacer un intento más, dijo 
  a su muñeca. —Voy a pedir un chocolate. Si alguien me regala un chocolate en este día, sabré que tengo magia. Si no llega el 
  chocolate, sabré que todo fue una coincidencia. Así, Sofi se fue a la escuela y estuvo atenta a cualquier chocolate que pasara 
  por su lado. Una compañerita comía chocolate en el recreo, pero no le ofreció. Alguien llevó una canastita de galletas y chocolates
  a la maestra; se veían deliciosos, pero ninguno era para Sofi.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "Tarea terminada";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_1/Bloque_1/Semana_3/Actividad.png";

  bloque = "1";
  actividad_1 = "Marca en la línea tu respuesta. Luego, comenta.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
