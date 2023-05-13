import { Component } from '@angular/core';

@Component({
  selector: 'app-libro1-bloque3-semana2',
  templateUrl: './semana2.component.html',
  styleUrls: ['./semana2.component.css']
})
export class Libro1Bloque3Semana2Component {
  titulo = "Un paseo por el bosque";
  colorTitulo = "rgb(178, 216, 242)";
  foco1 = "<b class='¿'>¿</b><b>Respetas las cosas ajenas?</b>";
  foco2 = "<b class='¿'>¿</b><b>Crees que a los demás les guste que les hagan una travesura?</b>";
  colorFoco = "rgb(178, 216, 242)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_1/Bloque_3/Semana_2/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">En el bosque, durante el invierno, hace mucho frío. Hay ocasiones en que
  cae la nieve y deja todo cubierto de blanco. Cuando esto pasa, el gran lago
  se congela y se vuelve una pista de patinaje sobre hielo, a la que todos los
  animalitos van a jugar en compañía de sus familias. Siempre se cuidan unos
  a otros, sobre todo en tiempos de frío, ya que un grupo de lobos malvados
  ronda por el bosque para causar problemas, pero no sólo los lobos son un
  peligro, también los humanos cazadores que en invierno buscan las pieles
  de los animales para cubrirse del frío.</p>`;
  parrafo2 = `<p class="texto">Los osos vivían felices todo el tiempo, unidos como familia. Uno de esos fríos
  días, mamá osa preparó tres platos de sopa para la hora del almuerzo. La
  sopa estaba tan caliente que no se podía tomar, por lo que papá oso dijo:
  —Vamos a dar un paseo por el bosque mientras se enfría un poco nuestra
  sopa, así nos llenaremos de energía para nuestro trabajo del día. Acababan
  de salir de casa, cuando llegó por otro lado una niña muy traviesa llamada
  “Ricitos de Oro”, hija de un cazador. Ella andaba “explorando”, o más bien,
  buscando hacer travesuras, tanto que entró sin permiso a la casa de los osos.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "¿Y tú qué harías?";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_1/Bloque_3/Semana_2/Actividad.png";

  bloque = "3";
  actividad_1 = "Encierra en un círculo de color lo que harías en las siguientes situaciones.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
