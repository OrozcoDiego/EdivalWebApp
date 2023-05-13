import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  hideLoginButton = true;
  user = "";
  hasUser = false;
  password = "";
  hasPassword = false;
  showPassword = false;
  invalidUser = false;
  userType = 0;
  userLibro = 0;

  /*** Test Data ***/
  grupos = [
    {id: 1, name: "g1", libro: 1, idMaestro: 7},
    {id: 2, name: "g2", libro: 2, idMaestro: 8},
    {id: 3, name: "g3", libro: 3, idMaestro: 9},
    {id: 4, name: "g4", libro: 4, idMaestro: 10},
    {id: 5, name: "g5", libro: 5, idMaestro: 11},
    {id: 6, name: "g6", libro: 6, idMaestro: 12},
    {id: 7, name: "g7", libro: 1, idMaestro: 13},
    {id: 8, name: "g8", libro: 2, idMaestro: 13}
  ];
  /// type -> 1 = alumno, 2 = maestro
  usuarios = [
    {id: 1, name: "a1", type: 1, idgrupo: "1"}, // alumno
    {id: 2, name: "a2", type: 1, idgrupo: "2"}, // alumno
    {id: 3, name: "a3", type: 1, idgrupo: "3"}, // alumno
    {id: 4, name: "a4", type: 1, idgrupo: "4"}, // alumno
    {id: 5, name: "a5", type: 1, idgrupo: "5"}, // alumno
    {id: 6, name: "a6", type: 1, idgrupo: "6"}, // alumno
    {id: 7, name: "m1", type: 2, idgrupo: "1"}, // maestro con un grupo
    {id: 8, name: "m2", type: 2, idgrupo: "2"}, // maestro con un grupo
    {id: 9, name: "m3", type: 2, idgrupo: "3"}, // maestro con un grupo
    {id: 10, name: "m4", type: 2, idgrupo: "4"}, // maestro con un grupo
    {id: 11, name: "m5", type: 2, idgrupo: "5"}, // maestro con un grupo
    {id: 12, name: "m6", type: 2, idgrupo: "6"}, // maestro con un grupo
    {id: 13, name: "m7", type: 2, idgrupo: "7,8"} // maestro con mas de un grupo
  ];
  currenGroup: { name: string, libro: number }[] = [];
  libro = 0;

  constructor(
    private router: Router,
    private userService: UserService,
    private translate: TranslateService) {
      translate.setDefaultLang('en');
      translate.use('en');
  }

  ngOnInit() {
  }

  resetVaiables() {

  }
  
  changeUser(e: any){
    if (this.user == "") {
      this.hasUser = false;
    }
    else {
      this.hasUser = true;
    }
    this.buttonStatus();
  }

  changePassword(e: any){
    if (this.password == "") {
      this.hasPassword = false;
    }
    else {
      this.hasPassword = true;
    }
    this.buttonStatus();
  }

  buttonStatus(){
    if (this.hasUser && this.hasPassword) {
      this.hideLoginButton = false;
    }
    else {
      this.hideLoginButton = true;
    }
  }

  getData(){
    // Recorre todos los usuarios registrados
    for ( var usuario of this.usuarios ) {
      // Validar si el usuario ingresado existe
      if (usuario.name == this.user) {
        this.invalidUser = false;
        this.userType = usuario.type;
        
        // Obtener id del/los grupo(s)
        var tempIdGroup = usuario.idgrupo.split(",").map(d => Number(d) || d);
        
        // Recorre todos los grupos registrados
        this.grupos.forEach(grupo => {
          
          // Recorre los ID(s) de el/los grupo(s) que tiene el usuario
          tempIdGroup.forEach(idgroup => { 
            
            // Obtenemos los datos de/los grupo(s) y los agregamos a una lista
            if (idgroup == grupo.id) {
              this.currenGroup.push({name: grupo.name, libro: grupo.libro});
            }
          });
        });
        break;
      }
      else {
        this.invalidUser = true;
      }
    }

    //console.log("Invalid User: " + this.invalidUser + ", User is: " + this.user + ", Passord is: " + this.password + ", Grupo(s): ");
    //this.currenGroup.forEach(grupo=>console.log("{ Nombre del Grupo: " + grupo.name + ", Libro: " + grupo.libro + " }"));
    
    if (!this.invalidUser) {
      this.setLocalStorage();
      // Asignar nombre de usuario
      this.userService.setUserName(this.user);
      localStorage.setItem('UserName', this.user);
      console.log("Login User Type: " + this.userType);

      // Asignar typo de usuario
      this.userService.setUserType(this.userType);
      localStorage.setItem('UserType', this.userType.toString());

      // Asignar libro
      if ( this.currenGroup.length == 1 ) {
        this.userService.setLibro(this.currenGroup[0]["libro"]);
        localStorage.setItem('UserBook', this.currenGroup[0]["libro"].toString());
      }
      else {
        localStorage.setItem('UserBook', '0');
      }
      this.router.navigate(['/', 'home']);
    }    
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  setLocalStorage(){
    localStorage.setItem('UserName', '');
    localStorage.setItem('UserType', '');
    localStorage.setItem('UserBook', '0');
    localStorage.setItem('UserBlock', '0');
    localStorage.setItem('Semana', '0')
    localStorage.setItem('PageContent', '0');
    localStorage.setItem('ComponentActivity', '');
    //localStorage.setItem('page', '0');

  }
}
