import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegistaOcorrenciaService} from "./registaOcorrencia.service";    
import {Router} from "@angular/router";
import { Ocorrencia } from "./ocorrencia.model";

@Component({
    selector: 'regista-ocorrencia',
    templateUrl: './registaOcorrencia.component.html'
})
export class RegistaOcorrenciaComponent implements OnInit {
    myForm: FormGroup;

    constructor(private registaOcorrenciaService: RegistaOcorrenciaService, private router: Router) {}
    
    onSubmit() {
        const ocorrencia = new Ocorrencia(
            this.myForm.value.data_ocorrencia,
            this.myForm.value.tipo,
            this.myForm.value.local_ocorrencia,
            this.myForm.value.crianca_associada,
            this.myForm.value.turno,
            this.myForm.value.descricao,
            localStorage.getItem('userId'),
        );
        this.registaOcorrenciaService.register(ocorrencia)
            .subscribe(
                data => {
                    console.log(data),
                    window.alert("Ocorrencia registada com sucesso!");
                    this.router.navigateByUrl('centralPage');
                },
                error => console.log(error)
            );
        this.myForm.reset();
    }
    ngOnInit() {
        this.myForm = new FormGroup({
            data_ocorrencia: new FormControl(null, Validators.required),
            tipo: new FormControl(null, Validators.required),
            local_ocorrencia: new FormControl(null, Validators.required),
            crianca_associada: new FormControl(null, Validators.required),
            turno: new FormControl(null,Validators.required),            
            descricao: new FormControl(null,Validators.required),
            })
    }
}
