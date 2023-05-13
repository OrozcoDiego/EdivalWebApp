import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-libro1-bloque4-semana1',
  templateUrl: './semana1.component.html',
  styleUrls: ['./semana1.component.css']
})
export class Libro1Bloque4Semana1Component {
  titulo = "Ganar y Perder";
  colorTitulo = "rgb(137, 214, 248)";
  foco1 = "<b class='¿'>¿</b><b>Cómo te sientes cuando pierdes en un juego o actividad?</b>";
  foco2 = "<b class='¿'>¿</b><b>Te burlas de tus amigos cuando pierden?</b>";
  colorFoco = "rgb(137, 214, 248)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_1/Bloque_4/Semana_1/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">Si se trataba de jugar a las canicas, Sergio era el mejor, nadie ni en la escuela ni
  en la calle donde vivía, podía ganarle. Todos sus amigos lo animaban al ver cómo
  las canicas chocaban con las de otros y ganaba juego a juego. Sólo Abraham
  y Daniel no festejaban los triunfos de Sergio, permanecían en silencio, tenían
  envidia del éxito. Abraham comentó a Daniel: —Debemos hacer que Sergio
  pierda. —Pero <a class="¿ texto">¿</a>cómo? —preguntó Daniel. —No lo sé —respondió enfadado
  Abraham— ¡Ya pensaremos en algo! —dijo mientras caminaban a sus casas.
  </p>`;
  parrafo2 = `<p class="texto">Mientras tanto, a una de las casas que había estado vacía desde hace meses,
  una familia llegaba a la colonia para habitarla. Carolina una niña de 8 años,
  formaría parte del grupo de vecinos. Todos los niños corrieron para saludar a
  su nueva vecina. Miguel y Sergio se presentaron y entre risas y gritos Miguel,
  dijo: —¡Juguemos canicas! —¡Sí! Todos quedaron sin palabras, ¡oh sorpresa!,
  Carolina la nueva vecina, jugaba como ninguno pudo imaginarlo y uno a
  uno los niños dejaban sus canicas en manos de Carolina. Sergio no lo podía
  creer, conforme pasaba el tiempo, la bolsa donde guardaba sus canicas se
  fue quedando vacía.
  </p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "El desenlace";
  actividadTituloParte2 = "de un buen acto";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_1/Bloque_4/Semana_1/Actividad.png";

  bloque = "4";
  actividad_1 = "Selecciona la respuesta correcta.";
  actividad_2 = "Ayuda a Sergio a encontrar la palabra oculta y escríbela en la línea.";

  honestidad = [
    'dad',
    'nes',
    'ti',
    'ho'
  ];

  sinceridad = [
    'ce',
    'sin',
    'dad',
    'ri'
  ];

  lealtad = [
    'al',
    'tad',
    'le'
  ];

  drop(event: CdkDragDrop<string[]>, palabra: string) {
    switch (palabra) {
      case "honestidad":
        moveItemInArray(this.honestidad, event.previousIndex, event.currentIndex);
        console.log(this.honestidad);
        break;
      case "sinceridad":
        moveItemInArray(this.sinceridad, event.previousIndex, event.currentIndex);
        console.log(this.sinceridad);
        break;
      case "lealtad":
        moveItemInArray(this.lealtad, event.previousIndex, event.currentIndex);
        console.log(this.lealtad);
        break;
      default:
        break;
    }
  }



  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
    this.actividadTitulo.push(this.actividadTituloParte2);
  }
}

