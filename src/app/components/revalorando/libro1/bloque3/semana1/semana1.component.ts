import { Component } from '@angular/core';

@Component({
  selector: 'app-libro1-bloque3-semana1',
  templateUrl: './semana1.component.html',
  styleUrls: ['./semana1.component.css']
})
export class Libro1Bloque3Semana1Component {
  titulo = "La vida en el bosque";
  colorTitulo = "rgb(188, 173, 213)";
  foco1 = "<b class='¿'>¿</b><b>Te gusta estar en la escuela?</b>";
  foco2 = "<b class='¿'>¿</b><b>Para qué te sirve estudiar?</b>";
  colorFoco = "rgb(188, 173, 213)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_1/Bloque_3/Semana_1/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">Érase una vez una familia compuesta por tres ositos que vivían en una
  hermosa casita en el corazón de un gran bosque. El papá oso era muy
  grande, la mamá osa era de tamaño mediano y el hijito era un osito muy
  pequeño. Ellos eran felices, muy trabajadores, limpios y ordenados. Papá oso
  salía todos los días a buscar miel y a pescar para alimentar a su familia,
  mamá osa se quedaba en casa para ordenar todo en su lugar y el hijo oso,
  iba a la escuela donde convivía con sus amiguitos, entre los que había un
  venado, dos pájaros carpinteros, un zorro y su maestra la lechuza.</p>`;
  parrafo2 = `<p class="texto">En esa escuela tan singular, todos los animales aprenden a vivir felices,
  ayudando a sus papás en casa y en las labores del bosque, como limpiar las
  hojas que caen en el otoño, recortar la hierba y podar los árboles. También
  aprenden a vivir los valores como el respeto, el autodominio, la sinceridad, la
  moderación y el orden. La escuela era un gran árbol de color café al centro
  del bosque, hueco por dentro y con ventanitas redondas por las que entraba
  la luz. Todo era tranquilo en la vida del osito y su familia; hasta que un día, las
  cosas cambiarían...</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "La escuelita del bosque";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_1/Bloque_3/Semana_1/Actividad.png";

  bloque = "3";
  actividad_1 = "Colorea sólo a los animalitos que, según el cuento, asistían a la escuela del bosque.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
