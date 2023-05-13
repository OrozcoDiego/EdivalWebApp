import { Component } from '@angular/core';

@Component({
  selector: 'app-libro1-bloque1-semana5',
  templateUrl: './semana5.component.html',
  styleUrls: ['./semana5.component.css']
})
export class Libro1Bloque1Semana5Component {
  titulo = "Pensar para ganar";
  colorTitulo = "rgb(119, 200, 176)";
  foco1 = "<b class='¿'>¿</b><b>Piensas las cosas antes de realizarlas?</b>";
  foco2 = "<b class='¿'>¿</b><b>Imaginas lo que podría suceder cuando actúas de una manera o de otra?</b>";
  colorFoco = "rgb(119, 200, 176)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_1/Bloque_1/Semana_5/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">Sofi bajó con resignación a comer. —Lista, mamá, me puedes servir mi sopa
  de verduras. —<a class="¿ texto">¿</a>Sopa de verduras?, preguntó mamá. —Si tú quieres hija…
  Pero hice arroz rojo y arrachera para ti. Sofi no lo podía creer. “<a class="¿ texto">¿</a>Me estoy
  volviendo loca o qué?” Muy extrañada, comenzó a comer su arroz rojo,
  mientras pensaba en todo lo que había estado sucediendo. “Mmm, tarea,
  chocolate, arrachera con arroz…” De pronto, tuvo una idea. Rápidamente
  terminó de comer, ayudó a mamá a recoger la mesa y subió. —Voy a hacer
  mi tarea, dijo. Sofi subió a su recámara, miró a Amy y dijo: —Eres tú la que
  está haciendo la magia, <a class="¿ texto">¿</a>verdad? Sofi recordó que cuando sólo pensaba el
  deseo, no se cumplía, pero si lo decía a Amy, se cumplía. Amy no contestó,
  claro; sólo la miró con ternura.</p>`;
  parrafo2 = `<p class="texto">Sofi pensó: “Voy a hacer un experimento, voy a revisar la tarea”. Abrió su
  cuaderno de matemáticas y vio que los ejercicios de la tarea estaban en
  blanco. Cerró el libro, volteó hacia la pared, cerró los ojos con fuerza y pensó:
  “Ojalá la tarea se hiciera sola”. Con algo de nerviosismo, abrió de nuevo el
  cuaderno y vio que los ejercicios seguían en blanco.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "Hacer lo mejor";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_1/Bloque_1/Semana_5/Actividad.png";

  bloque = "1";
  actividad_1 = "Rellena el círculo y dibuja cuándo lo realizarás.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
