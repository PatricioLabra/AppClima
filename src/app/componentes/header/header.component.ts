import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public valparaiso:boolean;
  public metropolitana:boolean;
  public biobio:boolean;
  public araucania:boolean;


  constructor() {
    this.valparaiso = true;
    this.metropolitana = false;
    this.biobio = false;
    this.araucania = false;
  }

  ngOnInit(): void {
  }
  ventana1(){
    this.valparaiso = true;
    this.metropolitana = false;
    this.biobio = false;
    this.araucania = false;
  }
  ventana2(){
    this.valparaiso = false;
    this.metropolitana = true;
    this.biobio = false;
    this.araucania = false;
  }
  ventana3(){
    this.valparaiso = false;
    this.metropolitana = false;
    this.biobio = true;
    this.araucania = false;
  }
  ventana4(){
    this.valparaiso = false;
    this.metropolitana = false;
    this.biobio = false;
    this.araucania = true;
  }
}
