import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProcesosService } from '../../service/procesos-service';
import { Registro } from '../../model/registo.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styles: [
  ]
})
export class ListarComponent implements OnInit
{

  listaProcesos: Registro[] = [];
  habilitaCheck = false;

  constructor(private service: ProcesosService) {
    service.getList().subscribe(resp => {
      this.listaProcesos = resp;
    });
  }

  ngOnInit(): void {
  }

  actualizarDatos()
  {
    console.log(this.listaProcesos);
    this.service.updateData(this.listaProcesos);

  }

}
