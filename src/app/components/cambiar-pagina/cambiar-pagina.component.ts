import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cambiar-pagina',
  templateUrl: './cambiar-pagina.component.html',
  styleUrls: ['./cambiar-pagina.component.css']
})
export class CambiarPaginaComponent {
  libro = 0;
  bloque = 0;
  semana = 0;
  hideAtras = false;
  hideSiguiente = false;

  constructor(
    private router: Router,
    private userService: UserService
    ){};

  ngOnInit() {
    this.cambioPagina(0, 9);
  }

  cambioPagina(click: number, cambio: number){
    this.libro = Number(localStorage.getItem('UserBook')) ?? 0;
    this.bloque = Number(localStorage.getItem('UserBlock')) ?? 0;
    this.semana = Number(localStorage.getItem('Semana')) ?? 0;

    console.log("bloque, gfgkhfkhg: ", this.bloque);
    switch (this.bloque){
      case 1:
      case 3:
        //Desabilitar boton pagina anterior
        if (this.bloque == 1  && this.semana == 1) {
          this.hideAtras = true;
        }

        if (this.semana == 1 && cambio == 0) { //Bloque anterior ultima semana
          this.bloque--;
          this.semana = 4;
        }
        else if (cambio == 0) { //Semana anterior
          this.semana--;
        }
        else if(this.semana == 8) { //Bloque siguiente primera semana
          this.bloque++;
          this.semana = 1;
        }
        else { //Siguiente semana
          this.semana++;
        }
        break;
      
      case 2:
      case 4:
        if (this.semana == 1 && cambio == 0) { //Bloque anterior ultima semana
          this.bloque--;
          this.semana = 8;
        }
        else if (cambio == 0) { //Semana anterior
          this.semana--;
        }
        else if(this.semana == 4) { //Bloque siguiente primera semana
          this.bloque++;
          this.semana = 1;
        }
        else { //Siguiente semana
          this.semana++;
        }
        break;

        case 5:
          console.log("jhkjhkjhkjh");
          //Desabilitar boton pagina siguiente
          if (this.bloque == 5  && this.semana == 4) {
            this.hideSiguiente = true;
          }
  
          if (this.semana == 1 && cambio == 0) { //Bloque anterior ultima semana
            this.bloque--;
            this.semana = 4;
          }
          else if (cambio == 0) { //Semana anterior
            this.semana--;
          }
          else { //Siguiente semana
            this.semana++;
          }
          break;        
      
        default:
          break;
    }

    if (click == 1) {
      var componentActivity = 'app-libro' + this.libro + '-bloque' + this.bloque + '-semana' + this.semana;
      localStorage.setItem('UserBlock', this.bloque.toString());
      localStorage.setItem('Semana', this.semana.toString());
      localStorage.setItem('ComponentActivity', componentActivity)
      this.userService.page.emit({page: 7, activity: componentActivity});
      this.router.navigate(
        ['/home'],
        { queryParams: { libro: this.libro, bloque: this.bloque, semana: this.semana} }
      );
    }
  }

}
