import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Ocorrencia } from "./ocorrencia.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RegistaOcorrenciaService {
    constructor(private http: Http) {}

    register(ocorrencia: Ocorrencia) {
        const body = JSON.stringify(ocorrencia);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/ocorrencia', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
    
}