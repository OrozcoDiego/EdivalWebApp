import { Component } from '@angular/core';

@Component({
  selector: 'app-libro1-bloque3-semana3',
  templateUrl: './semana3.component.html',
  styleUrls: ['./semana3.component.css']
})
export class Libro1Bloque3Semana3Component {
  titulo = "Un paseo por el bosque";
  colorTitulo = "rgb(255, 209, 114)";
  foco1 = "<b class='¿'>¿</b><b>Cómo te sientes cuando te castigan?</b>";
  foco2 = "<b class='¿'>¿</b><b>Te gustaría que los demás tomaran tus cosas sin permiso? </b><b class='¿'>¿</b><b>Por qué?</b>";
  colorFoco = "rgb(255, 209, 114)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_1/Bloque_3/Semana_3/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">La niña de cabello rubio estaba hambrienta de tanto caminar por el bosque.
  Era muy traviesa, curiosa y hasta caprichosa. A veces contaba mentiras a sus
  papás; sobre todo, decía que nunca le dejaban tarea en la escuela a la que
  asistía. A Ricitos de Oro la castigaban mucho por su actitud desobediente. Esa
  mañana por ejemplo, se había salido de casa sin el permiso de su mamá, tenía
  tantas ganas de hacer alguna travesura que hasta se fue de ahí sin desayunar.</p>`;
  parrafo2 = `<p class="texto">Entrando a la casa de la familia oso, observó todo a su alrededor. Vio que
  todo estaba hecho en tres diferentes tamaños: las sillas, los platos, las
  cucharas y ¡hasta las camas! Había una sola mesa, en la que se encontraban
  ricos alimentos para oso, agua de miel y una sopa deliciosa. Ricitos no había
  desayunado y había corrido mucho... ¡se le antojó probar los alimentos que
  encontró en esa casa! Al oler esa rica sopa de pescado, le chillaron las tripas
  de hambre, por lo que Ricitos de Oro se acercó a la mesa, probó la sopa de
  papá oso y gritó: —¡Demasiado caliente! Después probó la sopa de mamá oso
  y dijo: —¡demasiado fría! Ya estaba hambrienta, probó la del osito pequeño y
  dijo: —¡Qué sopa más deliciosa! Y se la comió toda.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "Respeto lo";
  actividadTituloParte2 = "que no es mío";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_1/Bloque_3/Semana_3/Actividad.png";

  bloque = "3";
  actividad_1 = "Con líneas de diferente color, relaciona a cada oso con sus cosas para que Ricitos de Oro pueda respetar lo que no es suyo. También colorea las imágenes.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
    this.actividadTitulo.push(this.actividadTituloParte2);
  }
}
