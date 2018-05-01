import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/Rx';

import { Criancas } from "./crianca.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RegistaCriancaService {
    constructor(private http: Http) {}

    register(crianca: Criancas) {
        const body = JSON.stringify(crianca);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/crianca', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
    
}