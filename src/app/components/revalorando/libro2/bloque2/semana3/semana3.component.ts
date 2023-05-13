import { Component } from '@angular/core';

@Component({
  selector: 'app-libro2-bloque2-semana3',
  templateUrl: './semana3.component.html',
  styleUrls: ['./semana3.component.css']
})
export class Libro2Bloque2Semana3Component {
  titulo = "Aprovechar el tiempo";
  colorTitulo = "rgb(176, 118, 178)";
  foco1 = "<b class='¿'>¿</b><b>Has hecho cosas sabiendo que algo malo pudiera suceder? </b><b class='¿'>¿</b><b>Para qué?</b>";
  foco2 = "<b class='¿'>¿</b><b>Qué sucede cuando los niños no obedecen a sus padres y maestros?</b>";
  colorFoco = "rgb(176, 118, 178)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_2/Bloque_2/Semana_3/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">Pasaron los días y los niños quisieron hacer todavía más entretenidas las
  danzas, quedándose más tiempo para compartir al final una cena con lo que
  cada uno pudiera conseguir. Los padres descubrieron el plan y prohibieron a
  los niños argumentando: —Desperdiciarán y echarán a perder los alimentos,
  podrán comer en casa lo que deseen y luego, cuando terminen sus tareas,
  podrán salir a jugar—. Los niños se pusieron muy tristes, pues no es agradable
  sentir hambre, pero continuaron escapándose todas las tardes a danzar, sin
  cumplir sus responsabilidades.</p>`;
  parrafo2 = `<p class="texto">Un día, mientras danzaban, comenzaron a sentir que se levantaban en el aire,
  sus pies se despegaban de la tierra, con sus brazos y manos equilibraban su
  cuerpo al ritmo de la danza, sus cabezas brillaban por el hambre. No sabían
  por qué pasaba esto, pero se decían: —No miren hacia abajo—. Una mujer de
  la aldea que lavaba ropa en el lago los vio elevarse, los llamaba a gritos, pero
  los niños no respondieron, subían y subían en dirección al cielo entretenidos
  por el extraño suceso. Entonces, la mujer corrió a toda prisa al campamento
  para dar aviso. Los padres no podían creen lo que escuchaban.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "Ardilla a su cueva";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_2/Bloque_2/Semana_3/Actividad.png";

  bloque = "2";
  actividad_1 = "Con ayuda de tu maestro(a) participa en la dinámica.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
