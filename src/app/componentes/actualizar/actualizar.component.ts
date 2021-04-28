import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators,AbstractControl} from '@angular/forms'

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent implements OnInit {

  formulario:FormGroup;
  region: AbstractControl;

  constructor(public fb:FormBuilder) {
    this.formulario = this.fb.group({
      region:['',Validators.required],
      clima:['',Validators.required],
      dia:['',Validators.required],
      temperatura:['',Validators.required]
    });
    this.region = this.formulario.controls["region"];
  }

  ngOnInit(): void {
  }

  actualizar(){
    console.log(this.formulario.value);
  };
}
