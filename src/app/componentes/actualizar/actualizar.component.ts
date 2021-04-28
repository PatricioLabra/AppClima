import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators,} from '@angular/forms'

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent implements OnInit {

  formulario:FormGroup;

  constructor(public fb:FormBuilder) {
    this.formulario = this.fb.group({
      region:['',Validators.required],
      soleado:['',Validators.required],
      lluvioso:['',Validators.required],
      nublado:['',Validators.required],
      tormenta:['',Validators.required],
      dia:['',Validators.required],
      temperatura:['',Validators.required],
      celsius:['',Validators.required],
      fahrenheit:['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

/*+++ Funcion no finalizada, queda pendiente para despues de la revisión. +++++
Por el momento se logra ver las opciones seleccionadas por el usuario. Sin embargo, no se ha realizado
la modificación en la base de datos que se creó para este quizz*/
  actualizar(){
    console.log(this.formulario.value);
  };
}
