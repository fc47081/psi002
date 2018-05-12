import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";  
import {Router} from "@angular/router";
import { LivroOcorrenciasService } from "./livroOcorrencias.service";
import { Ocorrencia } from "../registaOcorrencia/ocorrencia.model";

@Component({
    selector: 'livro-ocorrencias',
    templateUrl: './livroOcorrencias.component.html'
})
export class LivroOcorrenciasComponent implements OnInit{ 
    ocorrencias: Ocorrencia[];
    myForm: FormGroup;

    constructor(private LivroOcorrenciasService: LivroOcorrenciasService,
                     private router: Router) {}

    onSubmit() {
        const ocorrencia = new Ocorrencia(
            this.myForm.value.data_ocorrencia,
            null,
            null,
            null,
            this.myForm.value.turno,
            null,
            null
        );
        this.LivroOcorrenciasService.getOcorrencias(ocorrencia)
            .subscribe(
                data => {
                    (ocorrencias: Ocorrencia[]) => {
                        this.ocorrencias = ocorrencias;
                    }
                    localStorage.setItem("ocorrencias", JSON.stringify(data));
                    window.location.reload();
                    console.log(data)
                },
                error => console.log(error)
            );
        this.myForm.reset();
    }

     ngOnInit() {
        this.myForm = new FormGroup({
            data_ocorrencia: new FormControl(null, Validators.required),
            turno: new FormControl(null, Validators.required)
        })

        var retrievedObject = localStorage.getItem('ocorrencias');
        this.ocorrencias = JSON.parse(retrievedObject);
        localStorage.removeItem('ocorrencias');
    }
}