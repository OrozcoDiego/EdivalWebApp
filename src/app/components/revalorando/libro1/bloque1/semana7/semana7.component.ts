import { Component } from '@angular/core';

@Component({
  selector: 'app-libro1-bloque1-semana7',
  templateUrl: './semana7.component.html',
  styleUrls: ['./semana7.component.css']
})
export class Libro1Bloque1Semana7Component {
  titulo = "El abuso es peligroso";
  colorTitulo = "rgb(0, 146, 212)";
  foco1 = "<b class='¿'>¿</b><b>Cómo puedes mantener el control en las acciones que realizas?</b>";
  foco2 = "<b class='¿'>¿</b><b>Qué cosas o actividades parecen dificiles de controlar?</b>";
  colorFoco = "rgb(0, 146, 212)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_1/Bloque_1/Semana_7/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">Con la magia que descubría Sofi decidió que por lo pronto, se concentraría en lo
  pequeño. —Amy —dijo tomando a la muñeca de la mano— quesadillas, chocolates
  para mañana, ¡ah! y algo de ropa nueva… Gracias. Así, pasaron algunos días. Sofi
  comía arroz rojo y arrachera, cenaba quesadillas o panela asada, tenía una buena
  dotación de chocolates rellenos de cereza y algo de ropa nueva; y nunca, nunca,
  tenía que hacer tarea. Era muy feliz, hasta que un día…</p>`;
  parrafo2 = `<p class="texto">—Ya no te queda tu uniforme, dijo mamá. —Estás subiendo mucho de peso.
  Era lógico, con tantas quesadillas y chocolates, empezaba a aumentar tallas
  rápidamente. “Creo que ya no voy a pedir chocolates”, pensó, mientras
  batallaba para abrochar la falda.</p>`;
  parrafo3 = `<p class="texto">Más tarde, en la escuela, ¡examen sorpresa! Y como Sofi nunca hacía tarea,
  no recordaba nada. Llegó a su casa un poco desanimada. Tomó a Amy y le
  dijo: —Creo que he aprendido una importante lección. No siempre es bueno
  que se cumplan todos tus deseos. Creo que ya no te voy a pedir nada. Amy
  la miró, como siempre, con mucha ternura.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "Buena decisión,";
  actividadTituloParte2 = "buena acción";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_1/Bloque_1/Semana_7/Actividad.png";

  bloque = "1";
  actividad_1 = "Elige hábitos saludables. Rellena el círculo. Luego, comenta cómo te ayudan o dañan.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.lectura.push(this.parrafo3);
    this.actividadTitulo.push(this.actividadTituloParte1);
    this.actividadTitulo.push(this.actividadTituloParte2);
  }
}
