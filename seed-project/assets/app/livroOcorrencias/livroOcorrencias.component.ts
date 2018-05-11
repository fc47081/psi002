import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";  
import {Router} from "@angular/router";
import { LivroOcorrenciasService } from "./livroOcorrencias.service";
import { Ocorrencia } from "../registaOcorrencia/ocorrencia.model";

@Component({
    selector: 'livro-ocorrencias',
    templateUrl: './livroOcorrencias.component.html'
})
export class LivroOcorrenciasComponent{

    constructor(private registaAtividadeService: LivroOcorrenciasService,
                     private router: Router) {}
}