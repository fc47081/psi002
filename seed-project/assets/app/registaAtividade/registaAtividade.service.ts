import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Atividade } from "./atividade.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RegistaAtividadeService {
    atividades: Atividade[];
    constructor(private http: Http) {}

    register(atividade: Atividade) {
        const body = JSON.stringify(atividade);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/atividade', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getAtividades() {
        return this.http.get('http://localhost:3000/atividade')
            .map((response: Response) => {
                const atividades = response.json().obj;
                return atividades;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    deleteAtividades(id) {
        return this.http.delete('http://localhost:3000/atividade/' + id)
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
    } 
}