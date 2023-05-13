import { Component } from '@angular/core';

@Component({
  selector: 'app-libro1-bloque4-semana3',
  templateUrl: './semana3.component.html',
  styleUrls: ['./semana3.component.css']
})
export class Libro1Bloque4Semana3Component {
  titulo = "El plan malicioso";
  colorTitulo = "rgb(242, 151, 166)";
  foco1 = "<b class='¿'>¿</b><b>Cómo te sientes cuando realizas algo que no es correcto?</b>";
  foco2 = "<b class='¿'>¿</b><b>Crees que si algún amigo hace trampa lo reconozca?</b>";
  colorFoco = "rgb(242, 151, 166)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_1/Bloque_4/Semana_3/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">Carolina comenzó a jugar y a ganar; pero luego, discretamente Abraham movía
  con el pie la canica de Sergio para dejarla cerca de la de Carolina y de esa manera
  no fallara su tiro. Conforme transcurrían el tiempo y los juegos, Abraham y Daniel
  se turnaban para mover la canica de Sergio. Al final del juego, Sergio recuperó las
  canicas que había perdido, además de ganar otras tantas a sus amigos.
  </p>`;
  parrafo2 = `<p class="texto">Sergio se retiró a su casa contento pero a la vez pensativo por la forma en que
  había ganado, no sentía entera satisfacción. Abraham y Daniel lo esperaban fuera
  de su casa sonrientes. Se frotaban las manos: —Bien hecho Sergio —exclamó
  Daniel, ahora hay que repartir las canicas. Sergio en tono serio dijo: —Mañana
  lo haremos, ahora tengo que ir con mi mamá pues tendré que salir con ella a
  comprar varias cosas. Sin estar muy de acuerdo, Abraham y Daniel movieron
  la cabeza. —Mañana en el campo de juego repartiremos las canicas —repitió
  Sergio. Entró en su casa y, sin saludar, se fue directo a su cuarto; su mamá que
  ya lo esperaba extrañada, lo observó, pero no dijo nada. En su cuarto, Sergio
  puso todas las canicas en la cama. —<a class="¿ texto">¿</a>Puedo pasar? —preguntó su mamá.
  </p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "Aprendiendo";
  actividadTituloParte2= "una lección"
  acctividadImagen = "../../../assets/images/Revalorando/Libro_1/Bloque_4/Semana_3/Actividad.png";

  bloque = "4";
  actividad_1 = "Une con una línea al niño con el globo que corresponda.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
    this.actividadTitulo.push(this.actividadTituloParte2);
  }
}
