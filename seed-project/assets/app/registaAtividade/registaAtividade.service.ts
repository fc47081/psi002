import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Atividade } from "./atividade.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RegistaAtividadeService {
    constructor(private http: Http) {}

    register(atividade: Atividade) {
        const body = JSON.stringify(atividade);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/atividade', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
    
}