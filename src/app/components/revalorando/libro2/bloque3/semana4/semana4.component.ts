import { Component } from '@angular/core';

@Component({
  selector: 'app-libro2-bloque3-semana4',
  templateUrl: './semana4.component.html',
  styleUrls: ['./semana4.component.css']
})
export class Libro2Bloque3Semana4Component {
  titulo = "Más vale prevenir";
  colorTitulo = "rgb(141, 195, 67)";
  foco1 = "<b class='¿'>¿</b><b>Qué tanto te dejas influir por los comerciales que ves y escuchas?</b>";
  foco2 = "<b class='¿'>¿</b><b>Qué tanto deseas tener las cosas que usan los demás?</b>";
  colorFoco = "rgb(141, 195, 67)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_2/Bloque_3/Semana_4/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">—¡Papá! —dijo Miguel entusiasmado— <a class="¿ texto">¿</a>ya viste?, ese anuncio dice que en la
  compra de ese paquete telefónico se incluyen cuatro aparatos, uno desde
  luego para ti, otro para mamá y los otros dos para mí y mi hermana… ¡Ándale,
  di que sí!, siempre he querido un teléfono para mí, varios de mis amigos
  tienen uno y es muy divertido. —<a class="¿ texto">¿</a>Para qué necesitas un teléfono? Leticia se
  apuró en contestar: —Con una aplicación puedes ver las calificaciones de la
  escuela y puedo llamar a mis amigas para estudiar y hacer trabajos. —Y puedo
  entretenerme con videojuegos —añadió Miguel—. El papá se sintió aturdido
  con los argumentos que tan rápidamente explicaban sus hijos; pero pensó en
  revisar esa oferta, pues él mismo no tenía un teléfono propio, contaba con el
  que del trabajo le proporcionaban.</p>`;
  parrafo2 = `<p class="texto">Llegando con mamá, parecía que los promotores de telefonía celular estaban
  en casa. Cada uno expuso sus motivaciones y al final, la conclusión de todos
  era evidente, realmente es absolutamente necesario aprovechar esta
  oportunidad tan ventajosa en la que se ahorraría no sólo dinero, sino tiempo
  y esfuerzos. Se adquirió el paquete y cada uno, feliz, recibió su anhelado
  teléfono celular.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "Agradezco lo que tengo";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_2/Bloque_3/Semana_4/Actividad.png";

  bloque = "3";
  actividad_1 = "Rellena el círculo de la respuesta y escribe lo que se pide.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
