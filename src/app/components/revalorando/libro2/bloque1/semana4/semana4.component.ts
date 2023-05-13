import { Component } from '@angular/core';

@Component({
  selector: 'app-libro2-bloque1-semana4',
  templateUrl: './semana4.component.html',
  styleUrls: ['./semana4.component.css']
})
export class Libro2Bloque1Semana4Component {
  titulo = "El gran salón de baile";
  colorTitulo = "rgb(175, 106, 172)";
  foco1 = "<b class='¿'>¿</b><b>Crees que es mejor conseguir las cosas con caprichos?</b>";
  foco2 = "<b class='¿'>¿</b><b>Cómo te sientes cuando los adultos te regañan por hacer algo incorrecto?</b>";
  colorFoco = "rgb(175, 106, 172)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_2/Bloque_1/Semana_4/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">Cuando llegó la noche y las luciérnagas comenzaron a encender sus luces
  por la hierba, la mariposita llevó a Patoso al baile de las hadas. Era al pie del
  gran roble, un hueco tapizado de verde musgo. Alrededor había diminutos
  taburetes de bellota que les había dado la ardilla que vivía en la copa del
  árbol, para que las hadas descansaran cuando estuvieran fatigadas de bailar;
  en un extremo, había un pequeño trono para el rey y la reina de las hadas.
  El techo estaba hecho con hojas verdes y entre ellas colgaban luciérnagas
  para iluminar la pista de baile.</p>`;
  parrafo2 = `<p class="texto">Patoso no había visto en su vida nada tan bonito como esta sala de baile de
  las hadas. Poco a poco, también las hadas comenzaron a llegar y la sala lució
  aún más bella, porque llevaban vestidos hechos con todo tipo de flores: azules,
  blancos, rosas, montones de encajes de tela de araña, perlas y diamantes
  tallados con gotas de rocío. El rey y la reina, también lucían trajes tejidos con
  dorados rayos de sol y deslumbrantes estrellas plateadas. Patoso estaba
  aturdido, pero todo el mundo parecía contento de verle y todos fueron muy
  amables con él, aunque sabía que no estaba haciendo lo correcto.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "¡Yo decido lo mejor!";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_2/Bloque_1/Semana_4/Actividad.png";

  bloque = "1";
  actividad_1 = "Selecciona la opción conveniente, si es falso o verdadero.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
