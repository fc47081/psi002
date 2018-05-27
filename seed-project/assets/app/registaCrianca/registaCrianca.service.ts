import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/Rx';

import { Criancas } from "./crianca.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RegistaCriancaService {
    criancas: Criancas[];
    constructor(private http: Http) {}

    register(crianca: Criancas) {
        const body = JSON.stringify(crianca);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/crianca', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
    
    getCriancas() {
        return this.http.get('http://localhost:3000/crianca')
            .map((response: Response) => {
                const criancas = response.json().obj;
                return criancas;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getCriancaById(id) {
        return this.http.get('http://localhost:3000/crianca/' + id)
            .map((response: Response) => {
                const crianca = response.json().obj;
                return crianca;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
}