import { Component } from '@angular/core';

@Component({
  selector: 'app-libro1-bloque1-semana4',
  templateUrl: './semana4.component.html',
  styleUrls: ['./semana4.component.css']
})
export class Libro1Bloque1Semana4Component {
  titulo = "Sorpresa deliciosa";
  colorTitulo = "rgb(139, 195, 82)";
  foco1 = "<b class='¿'>¿</b><b>Cómo obtienes las cosas que tienes? </b><b class='¿'>¿</b><b>Quién te las da?</b>";
  foco2 = "<b class='¿'>¿</b><b>Cómo agradeces las cosas que recibes de otras personas?</b>";
  colorFoco = "rgb(139, 195, 82)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_1/Bloque_1/Semana_4/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">Casi al final del día, sonó el timbre para salir de la escuela. Sofi acomodaba sus libros en la 
  mochila cuando de pronto, escuchó: —Sofi, <a class="¿ texto">¿</a>quieres un chocolate?, dijo María Jimena, mientras le ofrecía un “chocolatito relleno 
  de cereza”. Sí… A Sofi se le hicieron grandes los ojos y se quedó con la boca abierta sin decir siquiera “gracias”, no fue por 
  el chocolate, sino porque un deseo más se había cumplido.</p>`;
  parrafo2 = `<p class="texto">Mientras esperaba que su mamá llegara a la escuela para recogerla, Sofi trataba de poner en 
  práctica sus nuevos poderes: “Arroz rojo…, arrachera…“, pensaba, tratando de conjurar su comida favorita. Pero cuando 
  iba en el coche camino a casa y Sofi preguntó a mamá: —<a class="¿ texto">¿</a>Qué hiciste de comer?, su decepción fue muy grande. —Sopa de 
  verduras. Definitivamente no era lo que ella había deseado. De nuevo, su magia había fallado. <a class="¿ texto">¿</a>Qué estaba pasando? 
  Llegaron a casa y Sofi subió a guardar su mochila y a cambiarse de ropa. Con algo de tristeza, tomó a Amy y dijo: 
  —Amy, no entiendo qué pasa. A veces la magia funciona y a veces no. Funcionó con el chocolate, pero hoy no quería 
  sopa de verduras. Yo quería arroz rojo con arrachera. Amy sólo la miró con ternura, pero no dijo nada.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "Saber que da poder";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_1/Bloque_1/Semana_4/Actividad.png";

  bloque = "1";
  actividad_1 = "Rellena el círculo y dibuja la reacción de los demás.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
