import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import { Criancas } from "./crianca.model";
import {CentralPageService} from "./centralPage.service";

@Component({
    selector: 'app-centralPage',
    templateUrl: './centralPage.component.html'
})
export class CentralPageComponent{
/*
    myForm: FormGroup;

    constructor(private centralPageService: CentralPageService, private router: Router) {}

    onSubmit() {
        const crianca = new Criancas(this.myForm.value.nome, this.myForm.value.data_de_nascimento, this.myForm.value.tipo_de_sange,
            this.myForm.value.cc, this.myForm.value.nif, this.myForm.value.data_de_entrada);
            this.centralPageService.register(crianca)
            .subscribe(
                error => console.log(error)
            );
        this.myForm.reset();
    }
    */
}