import { Component } from '@angular/core';

@Component({
  selector: 'app-libro1-bloque3-semana4',
  templateUrl: './semana4.component.html',
  styleUrls: ['./semana4.component.css']
})
export class Libro1Bloque3Semana4Component {
  titulo = "La silla del osito";
  colorTitulo = "rgb(68, 194, 212)";
  foco1 = "<b class='¿'>¿</b><b>Eres cuidadoso con tus cosas?</b>";
  foco2 = "<b class='¿'>¿</b><b>Te gusta ayudar y respetar a tu familia?</b>";
  colorFoco = "rgb(68, 194, 212)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_1/Bloque_3/Semana_4/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">Ricitos de Oro había comido tanto que le entró mucho sueño. Primero se
  sentó en la silla de papá oso y dijo: —¡Demasiado dura! Se bajó de la silla y se
  sentó en la de mamá osa y dijo: —¡Demasiado suave! Por último, se sentó en
  la silla del osito pequeño y dijo: —¡Qué silla más cómoda! Y se quedó dormida.
  Estaba durmiendo tan a gusto, que cuando menos se dio cuenta, como se
  había sentado en una silla muy pequeña, empezó a sentir un movimiento
  raro y “¡CATAPLUM!”, la silla se rompió en pedacitos y ella cayó al suelo.</p>`;
  parrafo2 = `<p class="texto">Mientras tanto, cerca de la montaña, la familia oso estaba juntando madera
  para prender su chimenea, ya que el frío era cada vez más fuerte y necesitaban
  estar calientitos, aunque tenían mucho pelo, siempre les gustaba sentir el
  calor. Eran muy trabajadores, ya que ellos ¡hasta hacían sus propios muebles!
  Papá oso cortaba la madera y le daba forma, mamá oso se ponía a pegar las
  piezas y osito pintaba. La silla que Ricitos de Oro acababa de romper, era muy
  especial para osito, ya que fue el primer mueblecito que hizo junto a sus papás,
  ¡y ahora una niña traviesa la había roto! Ella estaba faltándole al respeto a las
  cosas de los demás, lo cual sin duda, no era nada agradable.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "Reparar el daño";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_1/Bloque_3/Semana_4/Actividad.png";

  bloque = "3";
  actividad_1 = "Ricitos de Oro rompió la sillita de osito... Ayúdale a reparar su falta de respeto uniendo los puntos para  arreglar la silla. Coloréala para que quede bonita.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
