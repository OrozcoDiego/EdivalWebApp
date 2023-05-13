import { Component } from '@angular/core';

@Component({
  selector: 'app-libro1-bloque1-semana2',
  templateUrl: './semana2.component.html',
  styleUrls: ['./semana2.component.css']
})
export class Libro1Bloque1Semana2Component {
  titulo = "Hago las cosas con gusto";
  colorTitulo = "rgb(255, 208, 93)";
  foco1 = "<b class='¿'>¿</b><b>Qué cosas son las que más te gusta hacer?</b>";
  foco2 = "<b class='¿'>¿</b><b>Qué pasaría si tus deseos siempre se cumplieran?</b>";
  colorFoco = "rgb(255, 208, 93)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_1/Bloque_1/Semana_2/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">Sofi jugaba sin preocupaciones, cuando poco tiempo después, escuchó que abajo en la cocina, mamá 
  comenzaba a preparar la cena. —Ojalá mamá haga “quechitas” —le dijo a Amy, pues las quesadillas eran una de sus comidas preferidas. 
  Cuando mamá le habló a cenar, bajo rápidamente y, con gran felicidad, vio que la esperaban dos ricas “quechitas”, recién hechas y 
  calientitas. ¡Qué día tan maravilloso!</p>`;
  parrafo2 = `<p class="texto">Al día siguiente por la tarde, Sofi jugaba con Amy cuando mamá preguntó: —¿Ya terminaste la tarea? —¡Ya 
  voy, mamá! —contestó Sofi y luego le dijo a Amy: —Ojalá la tarea se hiciera sola. Abrió el libro de español y ¡los ejercicios estaban 
  contestados! Abrió el de matemáticas y ¡también! La tarea ya estaba hecha. Ahora sí, no había duda... ¡La única explicación era magia! 
  ¡Los deseos de Sofi se estaban cumpliendo! Sin darse cuenta, Sofi se había convertido en una especie de mago sin varita mágica.</p>`;
  parrafo3 = `<p class="texto">Confiada en su nueva habilidad para hacer magia, Sofi decidió hacer un experimento. Dejó a un lado lo que 
  pudiera distraerla, volteó hacia la pared de su recámara y comenzó a desear algo en voz muy baja.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "Hacer lo que se necesita";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_1/Bloque_1/Semana_2/Actividad.png";

  bloque = "1";
  actividad_1 = "Rellena el círculo o dibuja tu respuesta.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.lectura.push(this.parrafo3);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
