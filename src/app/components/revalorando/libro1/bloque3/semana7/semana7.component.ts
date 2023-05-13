import { Component } from '@angular/core';

@Component({
  selector: 'app-libro1-bloque3-semana7',
  templateUrl: './semana7.component.html',
  styleUrls: ['./semana7.component.css']
})
export class Libro1Bloque3Semana7Component {
  titulo = "La sillita rota";
  colorTitulo = "rgb(155, 212, 180)";
  foco1 = "<b class='¿'>¿</b><b>Has perdido algo o a alguien que querías mucho?</b>";
  foco2 = "<b class='¿'>¿</b><b>Tus papás te ayudan cuando estás triste? </b><b class='¿'>¿</b><b>Cómo?</b>";
  colorFoco = "rgb(155, 212, 180)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_1/Bloque_3/Semana_7/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">Papá oso estaba muy enfadado: —Alguien ha entrado en nuestra casa —dijo
  refunfuñando y empezaba a mirar por todos los rincones. De pronto, se paró
  delante de su silla y exclamó con su voz ronca de oso enojado: —  <a class="¿ texto">¿</a>Quién se
  ha sentado en mi silla? La mamá oso también empezó a mirar por todos los
  rincones y con voz más suave dijo: —  <a class="¿ texto">¿</a>Y quién se ha sentado en la mía? El
  osito pequeño corrió hacia su silla y dijo con su vocecita dulce: —  <a class="¿ texto">¿</a>Quién se
  ha sentado en mi silla? ¡Está hecha pedazos! Y tanto trabajo que me costó
  pintarla, ¡fue el primer mueblecito que hice con ustedes!</p>`;
  parrafo2 = `<p class="texto">Otra vez osito lloraba y lloraba de tristeza por ver su sillita rota, tal como había
  soñado Ricitos de Oro, sólo que ella seguía dormida en la habitación de los
  osos. Mamá se acercó a osito y le dijo: —¡No te preocupes hijito, ya verás que
  la repararemos y quedará como nueva! Eso lo calmó un poco. La familia oso
  estaba desesperada y asustada; pensaron que el desastre sí había sido obra
  de los lobos, cuando de repente escucharon un pequeño ronquido de niña
  que venía de su habitación. ¡Oh, oh! Ricitos de Oro estaba en apuros.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "¡Las palabras mágicas!";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_1/Bloque_3/Semana_7/Actividad.png";

  bloque = "3";
  actividad_1 = `Como en la asignatura de español, ayuda a Ricitos de
  Oro a descubrir las palabras mágicas que le ayudarán
  a ser respetuosa. Completa con la letra faltante y
  encierra en color azul las vocales de cada una`

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
