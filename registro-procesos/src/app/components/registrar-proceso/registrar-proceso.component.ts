import { Component, OnInit } from '@angular/core';
import { ProcesosService } from '../../service/procesos-service';
import { Registro } from '../../model/registo.model';

@Component({
  selector: 'app-registrar-proceso',
  templateUrl: './registrar-proceso.component.html',
  styles: [
  ]
})
export class RegistrarProcesoComponent implements OnInit {


  registroUsuario: Registro = new Registro();

  constructor(private service: ProcesosService)
  {

  }

  ngOnInit(): void {
  }

  envioDatos()
  {
    this.service.saveData(this.registroUsuario);
  }

}
