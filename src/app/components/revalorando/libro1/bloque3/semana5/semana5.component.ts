import { Component } from '@angular/core';

@Component({
  selector: 'app-libro1-bloque3-semana5',
  templateUrl: './semana5.component.html',
  styleUrls: ['./semana5.component.css']
})
export class Libro1Bloque3Semana5Component {
  titulo = "El sueño sin respeto";
  colorTitulo = "rgb(188, 169, 210)";
  foco1 = "<b class='¿'>¿</b><b>Cómo te sientes después de hacer sentir mal a otros?</b>";
  foco2 = "<b class='¿'>¿</b><b>Crees que respetar a otros nos hace felices? </b><b class='¿'>¿</b><b>Por qué?</b>";
  colorFoco = "rgb(188, 169, 210)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_1/Bloque_3/Semana_5/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">Como había roto la silla pequeña, ahora buscaba un lugar cómodo para dormir.
  Fue a la habitación, donde probó recostarse en la cama de papá oso pero no
  le gustó, siguió con la cama de mamá oso pero la sentía incómoda, hasta que
  cayó profundamente dormida en la cama de hijo oso. La niña traviesa estaba
  soñando que iba caminando por el bosque rumbo a su casa. Iba muy asustada,
  tenía mucho miedo porque sabía que sus papás la iban a regañar por haber
  salido sin permiso de su casa. Dentro de su sueño avanzaba por el camino,
  cuando escuchaba a alguien llorar con mucho pesar. Se asomó por detrás
  de una piedra y vio que un osito estaba con su cabecita agachada, mientras
  su mamá oso se acercaba para abrazarlo. El osito decía con mucha tristeza:
  —¡Mami! <a class="¿ texto">¿</a>Qué hice mal para que alguien se metiera a mi casa y rompiera
  mis cosas? ¡Yo nunca le falto al respeto a nadie, nunca peleo con los demás;
  en la escuela siempre regreso lo que no es mío y trato a mis amiguitos con
  mucha educación! —Decía el osito a su mamá desconsolado, mientras Ricitos
  de Oro se sentía triste por lo que había hecho. Ese sueño se había vuelto una
  pesadilla, ¡y todo por no respetar las cosas ajenas! En ese momento, en la vida
  real, llegaba la familia oso a su casa.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "¡Yo también respeto!";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_1/Bloque_3/Semana_5/Actividad.png";

  bloque = "3";
  actividad_1 = "Colorea el recuadro que tenga la mejor respuesta.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
