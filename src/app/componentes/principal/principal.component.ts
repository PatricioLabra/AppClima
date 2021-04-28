import { Component, OnInit } from '@angular/core';
import {Region} from '../../interfaces/region'
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  public tempC:boolean;
  public tempF:boolean;
  regiones: Array<Region> = [];
  
  constructor() {
    this.tempC = true;
    this.tempF = false;
    //rellenamos Array
    this.regiones.push(new Region("Valparaíso"));
    this.regiones.push(new Region("Metropolitana"));
    this.regiones.push(new Region("Bio Bio"));
    this.regiones.push(new Region("Araucanía"));
  }

  ngOnInit(): void {
  }

  ventanaC(){

  }
  ventanaF(){

  }

}
