import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-lapicito',
  templateUrl: './lapicito.component.html',
  styleUrls: ['./lapicito.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LapicitoComponent {
  @Input() bloque: string = "";
  @Input() texto: string = "";
  lapicito = "";
  constructor(){}

  ngOnInit() {
    switch (this.bloque) {
      case "1":
        this.lapicito = "../../../assets/images/Revalorando/Comun/LapicitoAzul.png";
        break;
      case "2":
        this.lapicito = "../../../assets/images/Revalorando/Comun/LapicitoRojo.png";
        break;
      case "3":
        this.lapicito = "../../../assets/images/Revalorando/Comun/LapicitoVerde.png";
        break;
      case "4":
        this.lapicito = "../../../assets/images/Revalorando/Comun/LapicitoAmarillo.png";
        break;
      case "5":
        this.lapicito = "../../../assets/images/Revalorando/Comun/LapicitoMorado.png";
        break;
      default:
        this.lapicito = "";
    }
    console.log("Lapicito: " + this.bloque);
  }
}
