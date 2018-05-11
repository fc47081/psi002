import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Ocorrencia } from "../registaOcorrencia/ocorrencia.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LivroOcorrenciasService {
	constructor(private http: Http) {}
}