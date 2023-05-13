import { Component } from '@angular/core';

@Component({
  selector: 'app-libro1-bloque1-semana8',
  templateUrl: './semana8.component.html',
  styleUrls: ['./semana8.component.css']
})
export class Libro1Bloque1Semana8Component {
  titulo = "Corregir para aprender";
  colorTitulo = "rgb(112, 203, 215)";
  foco1 = "<b class='¿'>¿</b><b>Reconoces y aceptas cuando te equivocas?</b>";
  foco2 = "<b class='¿'>¿</b><b>Cómo organizas las actividades que realizas en casa después de la escuela?</b>";
  colorFoco = "rgb(112, 203, 215)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_1/Bloque_1/Semana_8/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">Sofi es una niña muy inteligente y quiere hacer siempre lo mejor. Pronto
  descubrió de dónde provenía la magia; y aunque de momento se sintió muy
  descansada, con mucho tiempo para jugar y conseguir cualquier cosa que
  pedía a su querida muñeca, no tardó en descubrir que estaba perdiendo
  el control, que se estaba aislando, sólo quería estar con Amy consiguiendo
  deseos sin realizar esfuerzo y sin merecerlos… Fue en la mirada tierna de
  Amy, en donde Sofi se miró reflejada y comprendió que su muñeca sólo
  quería verla feliz.</p>`;
  parrafo2 = `<p class="texto">Un día, sintiéndose apoyada por sus papás, volvió al camino de los hábitos
  saludables; elegía comer mejor y probaba los alimentos que su mamá
  preparaba con cariño: —¡Qué rico sabe, gracias! —decía a su mamá. Se
  organizó para borrar y repetir las tareas que con la magia había realizado,
  pero sin aprender nada. Y hasta pidió un último deseo… a sus papás:
  —Papá, mamá, pueden inscribirme en alguna actividad por la tarde, necesito
  ejercitarme y desarrollar habilidades; además, puedo encontrar amigos. Así,
  los días de magia irreal llegaron a su fin y Sofi comenzó una magia real
  que consigue con su trabajo y control. Amy disfrutaba sus logos y verla feliz,
  jugando como siempre.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "Organizado, hago todo";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_1/Bloque_1/Semana_8/Actividad.png";

  bloque = "1";
  actividad_1 = "Dibuja cara feliz o triste para registrar lo que haces en tu casa.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
