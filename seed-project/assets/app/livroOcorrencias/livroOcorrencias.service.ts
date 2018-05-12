import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Ocorrencia } from "../registaOcorrencia/ocorrencia.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LivroOcorrenciasService {
	constructor(private http: Http) {}

	getOcorrencias(ocorrencia) {
		return this.http.get('http://localhost:3000/ocorrencia/' + ocorrencia.turno + '/' + ocorrencia.data_ocorrencia)
            .map((response: Response) => {
                const ocorrencias = response.json().obj;
                return ocorrencias;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getAllOcorrencias() {
		return this.http.get('http://localhost:3000/ocorrencia')
            .map((response: Response) => {
                const ocorrencias = response.json().obj;
                return ocorrencias;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
}