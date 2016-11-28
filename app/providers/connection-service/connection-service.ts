import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConnectionService {

  constructor(private http: Http) {}

  getCep(cep: string) : Promise<Response>{
    return this.http.get('http://viacep.com.br/ws/' + cep.trim() + '/json/').toPromise();
  }

}
