import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.css']
})
export class IndiceComponent {
  step = 0;
  auxStep = 0;
  userBook = 0;
  userBlock = 0;
  srcImage = '';
  matTooltipValor1_1Disabled = true;
  matTooltipValor1_2Disabled = true;
  matTooltipValor1_3Disabled = true;
  matTooltipValor2_1Disabled = true;
  matTooltipValor2_2Disabled = true;
  matTooltipValor2_3Disabled = true;
  matTooltipValor3_1Disabled = true;
  matTooltipValor3_2Disabled = true;
  matTooltipValor3_3Disabled = true;
  styleValor1_1 = '';
  styleValor1_2 = '';
  styleValor1_3 = '';
  styleValor2_1 = '';
  styleValor2_2 = '';
  styleValor2_3 = '';
  styleValor3_1 = '';
  styleValor3_2 = '';
  styleValor3_3 = '';
  widthSemana1 = 0;
  widthSemana2 = 0;
  widthSemana3 = 0;
  widthSemana4 = 0;
  widthSemana5 = 0;
  widthSemana6 = 0;
  widthSemana7 = 0;
  widthSemana8 = 0;
  hideSemana = true;

  //@Output() goToActivity = new EventEmitter<string>();

  constructor(
    private userService: UserService,
    private translate: TranslateService,
    private router: Router) {
  }

  ngOnInit() {
    //this.userBook = this.userService.getLibro();
    this.userBook = Number(localStorage.getItem('UserBook')) ?? 0;
    this.userBlock = Number(localStorage.getItem('UserBlock')) ?? 0;

    this.srcImage = '../../assets/images/Revalorando/Libro_' + this.userBook + '/Portada.png';
    this.translate.use('libro' + this.userBook);

    
  }

  setStep(index: number) {
    //console.log("Step: " + this.step, " auxStep: "+ this.auxStep);
    this.step = index;
    if (this.step == this.auxStep){
      this.auxStep = 0;
    }
    else{
      this.auxStep = index;
    }
    this.userBlock = this.auxStep;
    //localStorage.setItem('UserBlock', this.userBlock.toString());
    //console.log("Step: " + this.step, " auxStep: " + this.auxStep);
    this.changeImage(this.auxStep);
    //var semana1 = (document.getElementById('semana1') as HTMLDivElement).offsetWidth;
    var semana1 = 250;
    console.log("AAAAAAAAA: " + semana1);
    //semana1 += semana1 + 30;
    this.widthSemana1 = semana1;
    this.widthSemana2 = semana1 + 30;
    this.widthSemana3 = semana1 + 60;
    this.widthSemana4 = semana1 + 90;
    this.widthSemana5 = semana1 + 120;
    this.widthSemana6 = semana1 + 150;
    this.widthSemana7 = semana1 + 180;
    this.widthSemana8 = semana1 + 210;
  }

  changeImage(num: number) {
    switch (num) {
      case 0: {
        this.srcImage = '../../assets/images/Revalorando/Libro_' + this.userBook + '/Portada.png';
        break;
      }
      case 1: {
        this.srcImage = '../../assets/images/Revalorando/Libro_' + this.userBook + '/Bloque1.png';
        break;
      }
      case 2: {
        this.srcImage = '../../assets/images/Revalorando/Libro_' + this.userBook + '/Bloque2.png';
        break;
      }
      case 3: {
        this.srcImage = '../../assets/images/Revalorando/Libro_' + this.userBook + '/Bloque3.png';
        break;
      }
      case 4: {
        this.srcImage = '../../assets/images/Revalorando/Libro_' + this.userBook + '/Bloque4.png';
        break;
      }
      case 5: {
        this.srcImage = '../../assets/images/Revalorando/Libro_' + this.userBook + '/Bloque5.png';
        break;
      }
      default: {
        this.srcImage = '';
        break;
      }
    }
  }

  applyValorStyles(parte: number) {
    var styles = {};
    styles = this.mapValoresEasy(parte, 1);
    return styles;
  }

  tooltipVisible(parte: number) {
    var tooltipDisabled = true;
    tooltipDisabled = this.mapValoresEasy(parte, 2);
    return tooltipDisabled;
  }

  mapValoresEasy(parte: number, whatReturn: number): any{
    var styles = {};
    var tooltipDisavled = false;
    switch (parte) {
      /***  Libro 1 -> Bloque 1 -> Valor 1 -> Parte 1  ***/
      case 1: {
        styles = {};
        tooltipDisavled = true;
        break;
      }
      /***  Libro 1 -> Bloque 1 -> Valor 1 -> Parte 2  ***/
      case 2: {
        styles = {'color' : 'red'};
        tooltipDisavled = false; 
        break;
      }
      /***  Libro 1 -> Bloque 1 -> Valor 1 -> Parte 3  ***/
      case 3: {
        styles = {};
        tooltipDisavled = true;
        break;
      }
    }

    /* Return */
    switch (whatReturn) {
      /* Style */
      case 1: {
        return styles;
      }
      /* Tooltip Visible */
      case 2: {
        return tooltipDisavled;
      }
      default: {
        return;
      }
    }
  }

  mapValores(valor: number, parte: number, whatReturn: number): any {
    var styles = {};
    var tooltipDisavled = false;
    switch (this.userBook) {
      /***  Libro 1  ***/
      case 1: {
        switch (this.userBlock) {
          /***  Libro 1 - Bloque 1  ***/
          case 1: {
            switch (valor) {
              /***  Libro 1 -> Bloque 1 -> Valor 1  ***/
              case 1: {
                switch (parte) {
                  /***  Libro 1 -> Bloque 1 -> Valor 1 -> Parte 1  ***/
                  case 1: {
                    styles = {};
                    tooltipDisavled = true;
                    break;
                  }
                  /***  Libro 1 -> Bloque 1 -> Valor 1 -> Parte 2  ***/
                  case 2: {
                    styles = {'color' : 'red'};
                    tooltipDisavled = false; 
                    break;
                  }
                  /***  Libro 1 -> Bloque 1 -> Valor 1 -> Parte 3  ***/
                  case 3: {
                    styles = {};
                    tooltipDisavled = true;
                    break;
                  }
                }
                break;
              }
              /***  Libro 1 -> Bloque 1 -> Valor 2  ***/
              case 2: {
                switch (parte) {
                  /***  Libro 1 -> Bloque 1 -> Valor 2 -> Parte 1  ***/
                  case 1: {
                    styles = {};
                    tooltipDisavled = true;
                    break;
                  }
                  /***  Libro 1 -> Bloque 1 -> Valor 2 -> Parte 2  ***/
                  case 2: {
                    styles = {'color' : 'red'};
                    tooltipDisavled = false;
                    break;
                  }
                  /***  Libro 1 -> Bloque 1 -> Valor 2 -> Parte 3  ***/
                  case 3: {
                    styles = {};
                    tooltipDisavled = true;
                    break;
                  }
                }
                break;
              }
              /***  Libro 1 -> Bloque 1 -> Valor 3  ***/
              case 3: {
                switch (parte) {
                  /***  Libro 1 -> Bloque 1 -> Valor 3 -> Parte 1  ***/
                  case 1: {
                    styles = {};
                    tooltipDisavled = true;
                    break;
                  }
                  /***  Libro 1 -> Bloque 1 -> Valor 3 -> Parte 2  ***/
                  case 2: {
                    styles = {'color' : 'red'};
                    tooltipDisavled = false;
                    break;
                  }
                  /***  Libro 1 -> Bloque 1 -> Valor 3 -> Parte 3  ***/
                  case 3: {
                    styles = {};
                    tooltipDisavled = true;
                    break;
                  }
                }
                break;
              }
            }
            break;
          }
          /***  Libro 1 - Bloque 2  ***/
          case 2: {
            switch (valor) {
              /***  Libro 1 -> Bloque 2 -> Valor 1  ***/
              case 1: {
                switch (parte) {
                  /***  Libro 1 -> Bloque 2 -> Valor 1 -> Parte 1  ***/
                  case 1: {
                    styles = {};
                    tooltipDisavled = true;
                    break;
                  }
                  /***  Libro 1 -> Bloque 2 -> Valor 1 -> Parte 2  ***/
                  case 2: {
                    styles = {'color' : 'red'};
                    tooltipDisavled = false; 
                    break;
                  }
                  /***  Libro 1 -> Bloque 2 -> Valor 1 -> Parte 3  ***/
                  case 3: {
                    styles = {};
                    tooltipDisavled = true;
                    break;
                  }
                }
                break;
              }
              /***  Libro 1 -> Bloque 2 -> Valor 2  ***/
              case 2: {
                switch (parte) {
                  /***  Libro 1 -> Bloque 2 -> Valor 2 -> Parte 1  ***/
                  case 1: {
                    styles = {};
                    tooltipDisavled = true;
                    break;
                  }
                  /***  Libro 1 -> Bloque 2 -> Valor 2 -> Parte 2  ***/
                  case 2: {
                    styles = {'color' : 'red'};
                    tooltipDisavled = false;
                    break;
                  }
                  /***  Libro 1 -> Bloque 2 -> Valor 2 -> Parte 3  ***/
                  case 3: {
                    styles = {};
                    tooltipDisavled = true;
                    break;
                  }
                }
                break;
              }
              /***  Libro 1 -> Bloque 2 -> Valor 3  ***/
              case 3: {
                switch (parte) {
                  /***  Libro 1 -> Bloque 2 -> Valor 3 -> Parte 1  ***/
                  case 1: {
                    styles = {};
                    tooltipDisavled = true;
                    break;
                  }
                  /***  Libro 1 -> Bloque 2 -> Valor 3 -> Parte 2  ***/
                  case 2: {
                    styles = {'color' : 'red'};
                    tooltipDisavled = false;
                    break;
                  }
                  /***  Libro 1 -> Bloque 2 -> Valor 3 -> Parte 3  ***/
                  case 3: {
                    styles = {};
                    tooltipDisavled = true;
                    break;
                  }
                }
                break;
              }
            }
            break;
          }
          /***  Libro 1 - Bloque 3  ***/
          case 3: {
            break;
          }
          /***  Libro 1 - Bloque 4  ***/
          case 4: {
            break;
          }
          /***  Libro 1 - Bloque 5  ***/
          case 5: {
            break;
          }
          default: {
            break;
          }
        }
        break;
      }

      /***  Libro 2  ***/
      case 2: {
        switch (this.userBlock) {
          case 1: {
            break;
          }
          case 2: {
            break;
          }
          case 3: {
            break;
          }
          case 4: {
            break;
          }
          case 5: {
            break;
          }
          default: {
            break;
          }
        }
        break;
      }

      /***  Libro 3  ***/
      case 3: {
        switch (this.userBlock) {
          case 1: {
            break;
          }
          case 2: {
            break;
          }
          case 3: {
            break;
          }
          case 4: {
            break;
          }
          case 5: {
            break;
          }
          default: {
            break;
          }
        }
        break;
      }

      /***  Libro 4  ***/
      case 4: {
        switch (this.userBlock) {
          case 1: {
            break;
          }
          case 2: {
            break;
          }
          case 3: {
            break;
          }
          case 4: {
            break;
          }
          case 5: {
            break;
          }
          default: {
            break;
          }
        }
        break;
      }

      /***  Libro 5  ***/
      case 5: {
        switch (this.userBlock) {
          case 1: {
            break;
          }
          case 2: {
            break;
          }
          case 3: {
            break;
          }
          case 4: {
            break;
          }
          case 5: {
            break;
          }
          default: {
            break;
          }
        }
        break;
      }

      /***  Libro 6  ***/
      case 6: {
        switch (this.userBlock) {
          case 1: {
            break;
          }
          case 2: {
            break;
          }
          case 3: {
            break;
          }
          case 4: {
            break;
          }
          case 5: {
            break;
          }
          default: {
            break;
          }
        }
        break;
      }

      /***  Default  ***/
      default: {
        break;
      }
    }

    /* Return */
    switch (whatReturn) {
      /* Style */
      case 1: {
        return styles;
      }
      /* Tooltip Visible */
      case 2: {
        return tooltipDisavled;
      }
      default: {
        return;
      }
    }
  }

  goToActivities(numSemana: number) {
    //Ejemplo componenActivity: app-libro1-bloque1-semana1
    var componentActivity = 'app-libro' + this.userBook + '-bloque' + this.userBlock + '-semana' + numSemana;
    localStorage.setItem('UserBlock', this.userBlock.toString());
    localStorage.setItem('PageContent', '7');
    localStorage.setItem('Semana', numSemana.toString());
    localStorage.setItem('ComponentActivity', componentActivity)
    this.userService.page.emit({page: 7, activity: componentActivity});
    this.router.navigate(
      ['/home'],
      { queryParams: { libro: this.userBook, bloque: this.userBlock, semana: numSemana} }
    );
    
  }
}
