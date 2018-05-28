import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import { User } from "../auth/user.model";

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

    updateUser(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        let id = localStorage.getItem('userId');
        return this.http.post('http://localhost:3000/user/' + id, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
}