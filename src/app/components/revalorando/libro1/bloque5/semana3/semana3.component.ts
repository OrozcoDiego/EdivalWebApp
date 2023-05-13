import { Component } from '@angular/core';

@Component({
  selector: 'app-libro1-bloque5-semana3',
  templateUrl: './semana3.component.html',
  styleUrls: ['./semana3.component.css']
})
export class Libro1Bloque5Semana3Component {
  titulo = "Escucho a los demás";
  colorTitulo = "rgb(191, 215, 108)";
  foco1 = "<b class='¿'>¿</b><b>Crees que tienes siempre la razón en todo? </b><b class='¿'>¿</b><b>Por qué?</b>";
  foco2 = "<b class='¿'>¿</b><b>Cómo puedes saber cuál es la verdad y en quién confiar?</b>";
  colorFoco = "rgb(191, 215, 108)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_1/Bloque_5/Semana_3/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">La princesa Leonor sabía que eran pequeños para cazar al monstruo, pero
  también, que eran muy valientes. El príncipe Rodrigo animó a su hermana:
  —Juntos podremos vencerlo, confiemos en las habilidades que hemos
  aprendido de nuestros padres; nos corresponde cazar al monstruo y acabar
  con el terror de la aldea de una vez por todas.</p>`;
  parrafo2 = `<p class="texto">Reunieron a los sabios de la aldea para preguntar qué sabían del monstruo,
  cómo era, qué tipo de bestia enfrentarían. Se presentaron ante los príncipes
  seis hombres ciegos, que aseguraban haber tocado a la fiera. —Es como
  una pared de barro secada al sol —dijo uno. —Tiene la misma forma que el
  tronco de una gran palmera —mencionó otro. —Es como un gran abanico
  plano —alguien gritó. —No, no, es más bien como una larga serpiente —alegó
  otro. —Se equivocan, es como una lanza. —Todos están en un error, es igual
  a una vieja cuerda —exclamó el último. “<a class="¿ texto">¿</a>Qué clase de terrible monstruo
  enfrentamos?”, pensaron los príncipes. No podemos poner en duda los
  testimonios de estos sabios… Pero entre ellos mismos no logran ponerse de
  acuerdo. Así que, con determinación, montaron sus caballos para dirigirse
  hacia los bosques lejanos, donde aseguraban haber tocado a la bestia.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "Teléfono descompuesto";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_1/Bloque_5/Semana_3/Actividad.png";

  bloque = "5";
  actividad_1 = "Con ayuda de tu maestro(a) participa en la dinámica.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
