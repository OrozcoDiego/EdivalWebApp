import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  bloque1 = false;
  bloque2 = false;
  bloque3 = false;
  bloque4 = false;
  bloque5 = false;
  pageContent = 0;
  page = 0;
  userType = 0;
  pageNum = 0;
  userName = "";
  componentActivity = "";

  private subs: Subscription[]=[];

  constructor(
    private userService: UserService,
    private activatedRoute : ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    
    this.subs[0] = this.userService.page.subscribe(
      (info) => {
        this.pageContent = info.page;
        localStorage.setItem('pageContent', this.pageContent.toString());
        this.componentActivity = info.activity;
        localStorage.setItem('activity', this.componentActivity);
        console.log("Si llego el evento: " +  this.componentActivity + ", " + this.pageContent);
      }
    );

    console.log("Antes de consultar servicio, User Type: " + this.userType);
    //this.userType = this.userService.getUserType();
    this.userType = Number(localStorage.getItem('UserType')) ?? 0;
    console.log("Despues de consultar servicio, User Type: " + this.userType);
    
    console.log("Antes de consultar servicio, User Name: " + this.userName);
    //this.userName = this.userService.getUserName();
    this.userName = localStorage.getItem('UserName') ?? '';
    console.log("Despues de consultar servicio, User Name: " + this.userName);

    // Consultar parametros de la url
    //this.pageNum = this.activatedRoute.snapshot.queryParamMap.get("semana");
    //console.log("La semana es: " + this.pageNum);

    console.log("Antes de consultar servicio, PageContent: " + this.pageContent);
    this.pageContent = Number(localStorage.getItem('PageContent')) ?? 0;
    console.log("Despues de consultar servicio, PageContent: " + this.pageContent);

    console.log("Antes de consultar servicio, ComponentActivity: " + this.componentActivity);
    this.componentActivity = localStorage.getItem('ComponentActivity') ?? '';
    console.log("Despues de consultar servicio, ComponentActivity: " + this.componentActivity);

    if (this.pageContent == 0) {
      if (this.userType == 1) {
        this.pageContent = 1;
      }
      else {
        this.pageContent = 3;
      }
    }
    

    /*
    if (this.pageContent != 0) {
      this.page = 7;
    }
    else
    {
      if (this.userType == 1) {
        this.page = 1;
      }
      else {
        this.page = 3;
      }
    }
    */
    console.log("Page: " + this.pageContent);
    
    //console.log("Test Service: " + this.userService.getUserName());
  }

  clickButtonToggle(num: number){
    if (num == 1){
      this.step = 0;
      this.changeImage(0);
      localStorage.setItem('UserBlock', '0');
      localStorage.setItem('Semana', '0')
      localStorage.setItem('PageContent', '1');
      localStorage.setItem('ComponentActivity', '');
      this.router.navigate(
        ['/home']
      );
    }
    this.pageContent = num;
    localStorage.setItem('pageNum', this.pageContent.toString());
    
  }

  //div indice
  step = 0;
  auxStep = 0;
  srcImage = '../../assets/images/Revalorando/Libro_3/Portada.png';

  setStep(index: number) {
    console.log("Step: " + this.step, " auxStep: "+ this.auxStep);
    this.step = index;
    if (this.step == this.auxStep){
      this.auxStep = 0;
    }
    else{
      this.auxStep = index;
    }
    console.log("Step: " + this.step, " auxStep: "+ this.auxStep);
    this.changeImage(this.auxStep);
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  changeImage(num: number){
    switch (num){
      case 0:
        this.srcImage = '../../assets/images/Revalorando/Libro_3/Portada.png';
        break;
      case 1:
        this.srcImage = '../../assets/images/Revalorando/Libro_3/Bloque1.png';
        break;
      case 2:
        this.srcImage = '../../assets/images/Revalorando/Libro_3/Bloque2.png';
        break;
      case 3:
        this.srcImage = '../../assets/images/Revalorando/Libro_3/Bloque3.png';
        break;
      case 4:
        this.srcImage = '../../assets/images/Revalorando/Libro_3/Bloque4.png';
        break;
      case 5:
        this.srcImage = '../../assets/images/Revalorando/Libro_3/Bloque5.png';
        break;
      default:
        this.srcImage = '';
        break;
    }
  }

}
