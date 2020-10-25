import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registro } from '../model/registo.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProcesosService
{
  url: string =  'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getList()
  {
    return this.http.get(`${this.url}/list`).pipe( map(this.crearArreglo), delay(0) );
  }

  private crearArreglo(registroObj: object)
  {
    const registros: Registro[] = [];

    if(registroObj === null){
      return [];
    }
    Object.keys(registroObj).forEach(key => {
      const reg: Registro = registroObj[key];
      reg.id = key;
      registros.push(reg);
    });

    return registros;

  }

  saveData(registro: Registro)
  {
    const data = {
      ...registro
    };

    return this.http.post(`${this.url}/save`, data).subscribe(resp => {
      console.log(resp);
    });
  }

  updateData(registro: Registro[])
  {
    const data = {
      ...registro
    };

    console.log(registro);

    return this.http.post(`${this.url}/update`, registro).subscribe(resp => {
      console.log(resp);
    });
  }


}
