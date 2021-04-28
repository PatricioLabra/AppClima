import{Dias} from './dias'
import{Clima} from './clima'

export class Region {
  nombreR: string;
  semana: Array<Dias> = [];

  constructor(nombre:string){
    this.nombreR = nombre;

    //rellenamos
    this.semana.push({nombreD:"Lunes",tempC:18,tempF:(18*1.8)+32,tiempo:Clima.SOLEADO, imagen:"img/soleado.jpg" });
    this.semana.push({nombreD:"Martes",tempC:9,tempF:(9*1.8)+32,tiempo:Clima.LLUVIOSO, imagen:"img/lluvioso.jpg" });
    this.semana.push({nombreD:"Miércoles",tempC:11,tempF:(11*1.8)+32,tiempo:Clima.TORMENTA, imagen:"img/tormenta.jpg" });
    this.semana.push({nombreD:"Jueves",tempC:7,tempF:(7*1.8)+32,tiempo:Clima.NUBLADO, imagen:"img/nublado.jpg" });
    this.semana.push({nombreD:"Viernes",tempC:22,tempF:(22*1.8)+32,tiempo:Clima.SOLEADO, imagen:"img/soleado.jpg" });
    this.semana.push({nombreD:"Sábado",tempC:10,tempF:(10*1.8)+32,tiempo:Clima.SOLEADO, imagen:"img/soleado.jpg" });
    this.semana.push({nombreD:"Domingo",tempC:7,tempF:(7*1.8)+32,tiempo:Clima.SOLEADO, imagen:"img/soleado.jpg" });
  }
}
