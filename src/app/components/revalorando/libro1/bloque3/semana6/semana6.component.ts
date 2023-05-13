import { Component } from '@angular/core';

@Component({
  selector: 'app-libro1-bloque3-semana6',
  templateUrl: './semana6.component.html',
  styleUrls: ['./semana6.component.css']
})
export class Libro1Bloque3Semana6Component {
  titulo = "¡Pobres osos!";
  colorTitulo = "rgb(242, 149, 134)";
  foco1 = "<b class='¿'>¿</b><b>Tratas a todos por igual?</b>";
  foco2 = "<b class='¿'>¿</b><b>Te gusta que los demás cuiden tus cosas o que las tomen sin permiso?</b>";
  colorFoco = "rgb(242, 149, 134)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_1/Bloque_3/Semana_6/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">La familia oso apenas iba llegando a casa cuando vieron que la puerta de la
  entrada estaba abierta. Se asustaron mucho, pues pensaban que los lobos
  malvados habían entrado a robar o a hacer travesuras; tiraron la leña que
  traían cargando y fueron corriendo a toda prisa, moviendo cada uno sus
  cuatro patas gordas y peludas.</p>`;
  parrafo2 = `<p class="texto">Llegando a casa no vieron a nadie, por lo que se calmaron y pensaron que
  tal vez el viento que soplaba fuerte abrió la puerta. Los ositos tenían mucha
  hambre y querían comer, pero cuando papá oso vio su plato, exclamó con
  una gran voz: —<a class="¿ texto">¿</a>Quién ha probado mi sopa? Mamá oso también miró su
  plato y dijo con voz más suave: —<a class="¿ texto">¿</a>Y quién ha probado la mía?</p>`;
  parrafo3 = `<p class="texto">Cuando el osito pequeño vio su plato, dijo con una vocecita muy dulce pero
  triste: —<a class="¿ texto">¿</a>Quién se ha comido mi sopa y me ha dejado sin nada? El osito
  pequeño se echó a llorar pero la mamá oso le dijo: —No llores, que enseguida
  te preparo más. Era algo muy triste que alguien no respetara lo que no era
  suyo, la familia oso no podía explicarse cómo era posible que pudieran pasar
  esas cosas; pero eso no era todo.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "¡Las sillitas musicales!";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_1/Bloque_3/Semana_6/Actividad.png";

  bloque = "3";
  actividad_1 = "Con ayuda de tu maestro(a) realizaremos con orden la siguiente actividad.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.lectura.push(this.parrafo3);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
