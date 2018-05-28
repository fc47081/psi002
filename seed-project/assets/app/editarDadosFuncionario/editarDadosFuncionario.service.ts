import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class EditarDadosFuncionarioService {
    constructor(private http: Http) {}
    

     getUserById(id) {
        return this.http.get('http://localhost:3000/user/' + id)
            .map((response: Response) => {
                const user = response.json().obj;
                return user;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
}