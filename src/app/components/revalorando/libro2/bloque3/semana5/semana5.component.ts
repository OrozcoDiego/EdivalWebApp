import { Component } from '@angular/core';

@Component({
  selector: 'app-libro2-bloque3-semana5',
  templateUrl: './semana5.component.html',
  styleUrls: ['./semana5.component.css']
})
export class Libro2Bloque3Semana5Component {
  titulo = "Cada cosa a su tiempo";
  colorTitulo = "rgb(188, 169, 210)";
  foco1 = "<b class='¿'>¿</b><b>Qué haces para estar atento y aprender en tus clases?</b>";
  foco2 = "<b class='¿'>¿</b><b>Qué haces cuando estás en clase y algún compañero te distrae?</b>";
  colorFoco = "rgb(188, 169, 210)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_2/Bloque_3/Semana_5/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">Miguel llevó a escondidas a la escuela su nuevo y flamante teléfono celular; muy
  emocionado, de repente se reía solo, o concentrado, se movilizaba rápidamente
  entre páginas e interesantes aplicaciones, hasta el momento en el que su
  maestro pidió que se acercara con su cuaderno para revisar su trabajo… Sin
  darse cuenta, había pasado mucho tiempo y sólo tenía unos cuantos ejercicios,
  con la mirada baja mostró su cuaderno. —<a class="¿ texto">¿</a>Qué sucede Miguel? Tú siempre
  entregas completo tu trabajo. Miguel no supo qué responder... —Es que pensé
  que había pedido otra actividad —dijo mintiendo para justificarse. —Ve pues a
  terminar estos ejercicios y en cuanto acabes regresas.</p>`;
  parrafo2 = `<p class="texto">Apurado pero bien hecho como acostumbraba, completó la actividad. Pero
  siguió pensando en las posibilidades que descubría en su celular y pronto se
  encontró de nuevo curioseando. En el tiempo de recreo ni se acordó de su
  amigo Ulises; se alejó a un rincón del patio para que nadie lo interrumpiera
  y cuando llamaron para continuar las clases, ni escuchó. Un maestro lo
  encontró y escribió un reporte por indisciplina. A la salida, de regreso a casa
  y para olvidar su problema, se entretuvo con su celular, parecía ausente,
  distante de su papá y hermana.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "Estar en lo que se hace";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_2/Bloque_3/Semana_5/Actividad.png";

  bloque = "3";
  actividad_1 = "Rellena el círculo de la respuesta y escribe lo que se pide.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
