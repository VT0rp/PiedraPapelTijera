import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PiedraPapelTijera';
  eleccionCPU: number = 0;
  imagenes: string[] = [
    "piedra",
    "papel",
    "tijeras",
    "lagarto",
    "spock",
  ];
  imagenCPU: string = "";
  imagenJugador: string = "";
  imagenVanish: string = "vanish";
  textoCPU: string = "";
  textoJugador: string = "";
  puntosCPU: number = 0;
  puntosJugador: number = 0;
  jugadorBarra: number = 0;
  CPUBarra: number = 0;
  ronda: string = "";
  botonesJuego: string = "";
  botonesImportantes: string = "vanish";
  incrementoProgreso: number = 0;
  botonesJugador: string[] = [
    "disabled",
    "disabled",
    "disabled",
    "disabled",
    "disabled",
  ];
  botonesCPU: string[] = [
    "btn btn-dark",
    "btn btn-dark",
    "btn btn-dark",
    "btn btn-dark",
    "btn btn-dark",
  ];
  maxPuntos: number = 0;
  botonEmpezar: string = "vanish";
  botonReset: string = "vanish";

  Juego(eleccionJugador: number){
    if(this.puntosJugador !== this.maxPuntos || this.puntosCPU !== this.maxPuntos){
      this.eleccionCPU =Math.floor(Math.random() *5)
      this.setImagen(eleccionJugador);
      this.colorBotones(this.eleccionCPU);
      switch (this.eleccionCPU){
        case 0:
          if (eleccionJugador == 0){
            this.empate();
          }else if (eleccionJugador == 1){
            this.ganajugador();
          } else if (eleccionJugador == 2){
            this.ganacpu();
          }else if (eleccionJugador == 3){
            this.ganacpu();
          }else if (eleccionJugador == 4){
            this.ganajugador();
          }
          break;
        case 1: //papel
          if (eleccionJugador == 1){
            this.empate();
          }else if (eleccionJugador == 0){
            this.ganacpu();
          } else if (eleccionJugador == 2){
            this.ganajugador();
          }else if (eleccionJugador == 3){
            this.ganajugador();
          }else if (eleccionJugador == 4){
            this.ganacpu();
          }
          break;
        case 2: //tijera
          if (eleccionJugador == 2){
            this.empate();
          }else if (eleccionJugador == 0){
            this.ganajugador();
          } else if (eleccionJugador == 1){
            this.ganacpu();
          }else if (eleccionJugador == 3){
            this.ganacpu();
          }else if (eleccionJugador == 4){
            this.ganajugador();
          }
          break;
        case 3: // lagarto
          if (eleccionJugador == 3){
            this.empate();
          }else if (eleccionJugador == 0){
            this.ganajugador();
          } else if (eleccionJugador == 1){
            this.ganacpu();
          }else if (eleccionJugador == 2){
            this.ganajugador();
          }else if (eleccionJugador == 4){
            this.ganacpu();
          }
          break;
        case 4: //spook
          if (eleccionJugador == 4){
            this.empate();
          }else if (eleccionJugador == 0){
            this.ganacpu();
          } else if (eleccionJugador == 1){
            this.ganajugador();
          }else if (eleccionJugador == 2){
            this.ganacpu();
          }else if (eleccionJugador == 3){
            this.ganajugador();
          }
      }
      if(this.puntosCPU === this.maxPuntos || this.puntosJugador === this.maxPuntos){
        this.deshabilitarBotones();
        this.botonesImportantes = "";
        this.botonReset = "";
      }
    }
  }

  colorBotones(number: number){
    for (let index = 0; index < this.botonesCPU.length; index++) {
      this.botonesCPU[index] = "btn btn-dark";
    }
    this.botonesCPU[number] = "btn btn-warning";
  }
  ganacpu(){
    this.textoCPU = "GANA";
    this.textoJugador = "PIERDE";
    this.puntosCPU++;
    if(this.puntosCPU === this.maxPuntos){
      this.CPUBarra = 100;
    }else{
      this.CPUBarra += this.incrementoProgreso;
    }
  }
  ganajugador(){
    this.textoCPU = "PIERDE";
    this.textoJugador = "GANA";
    this.puntosJugador++;
    if(this.puntosJugador === this.maxPuntos){
      this.jugadorBarra = 100;
    }else{
      this.jugadorBarra += this.incrementoProgreso;
    }
  }
  empate(){
    this.textoCPU = "EMPATA";
    this.textoJugador = "EMPATA";
  }
  rondas(number: number){
    switch(number){
      case 0:
        this.maxPuntos = 3;
        this.incrementoProgreso = 33,4;
        break;
      case 1:
        this.maxPuntos = 5;
        this.incrementoProgreso = 20;
        break;
      case 2:
        this.maxPuntos = 7;
        this.incrementoProgreso = 14,3;
        break;
    }
    this.botonesImportantes = "";
    this.botonEmpezar = "";
  }
  deshabilitarBotones(){
    for (let index = 0; index < this.botonesJugador.length; index++) {
      this.botonesJugador[index] = "disabled";
    }
  }
  reset(){
    this.puntosJugador = 0;
    this.puntosCPU = 0;
    this.botonEmpezar = "disabled";
    this.botonesJuego = "";
    this.botonesCPU = [
      "btn btn-dark",
      "btn btn-dark",
      "btn btn-dark",
      "btn btn-dark",
      "btn btn-dark",
    ];
    this.botonReset = "vanish";
    this.CPUBarra = 0;
    this.jugadorBarra = 0;
    this.ronda = "";
    this.imagenVanish = "vanish";
    this.imagenCPU = "piedra";
    this.imagenJugador= "piedra";
    this.textoCPU = "";
    this.textoJugador = "";
    this.botonesImportantes = "vanish";
    this.imagenVanish = "vanish";
  }
  empezar(){
    this.botonesJuego = "vanish";
    this.habilitarBotones();
    this.botonEmpezar = "vanish";
    this.botonesImportantes = "vanish";
  }
  habilitarBotones(){
    for (let index = 0; index < this.botonesJugador.length; index++) {
      this.botonesJugador[index] = "";
    }
  }
  setImagen(eleccionJugador: number){
    this.imagenVanish = "";
    this.imagenCPU = this.imagenes[this.eleccionCPU];
    this.imagenJugador = this.imagenes[eleccionJugador];
  }
}
