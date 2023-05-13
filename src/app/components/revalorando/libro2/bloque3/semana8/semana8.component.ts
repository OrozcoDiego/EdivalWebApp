import { Component } from '@angular/core';

@Component({
  selector: 'app-libro2-bloque3-semana8',
  templateUrl: './semana8.component.html',
  styleUrls: ['./semana8.component.css']
})
export class Libro2Bloque3Semana8Component {
  titulo = "Mi familia especial";
  colorTitulo = "rgb(197, 110, 172)";
  foco1 = "<b class='¿'>¿</b><b>Cómo es mi familia? </b><b class='¿'>¿</b><b>Qué me gusta de ella? </b><b class='¿'>¿</b><b>Qué me gustaría mejorar?</b>";
  foco2 = "<b class='¿'>¿</b><b>Conozco cómo es la familia de mis amigos? </b><b class='¿'>¿</b><b>Qué retos viven? </b><b class='¿'>¿</b><b>Los respeto?</b>";
  colorFoco = "rgb(197, 110, 172)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_2/Bloque_3/Semana_8/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">—Buena tarde, podemos pasar —la familia de Miguel se encontraba tocando
  en la casa de Ulises. —Somos la familia de Miguel, compañero de su hijo. Un
  poco nerviosos por la inesperada visita y para iniciar conversación, el papá
  de Miguel comenzó por compartir lo que estaba sucediendo a su familia por
  la falta de control en el uso del celular y cómo había afectado la comunicación
  entre ellos. Y comentó también de la amistad y preocupación de Miguel por
  los retardos y la suspensión de Ulises.</p>`;
  parrafo2 = `<p class="texto">La familia de Ulises escuchaba con atención y respeto la situación que la
  familia de Miguel comentaba, ellos también platicaban lo que sucedía con
  ellos y cómo parecía difícil llegar puntual a la escuela. La charla parecía dar
  resultado, ambas familias se escuchaban y expresaban sus dificultades,
  algo preguntaban para terminar de comprender y poco a poco, cada una
  encontraba una respuesta para organizarse. Ambas familias hicieron el
  compromiso para intentar el cambio y la forma de organizarse, una para
  controlar el uso del celular y la otra para que Ulises no se pierda la oportunidad
  de asistir, aprender en la escuela y continuar la amistad entre los chicos.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "Valoro a mi familia";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_2/Bloque_3/Semana_8/Actividad.png";

  bloque = "3";
  actividad_1 = "Hay varios tipos de familia, cada una es única y valiosa.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
