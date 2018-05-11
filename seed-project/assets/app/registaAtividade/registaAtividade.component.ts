import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegistaAtividadeService} from "./registaAtividade.service";    
import {Router} from "@angular/router";
import { Atividade } from "./atividade.model";

@Component({
    selector: 'regista-atividade',
    templateUrl: './registaAtividade.component.html'
})
export class RegistaAtividadeComponent implements OnInit {
    myForm: FormGroup;

    constructor(private registaAtividadeService: RegistaAtividadeService, private router: Router) {}

    onSubmit() {
        const atividade = new Atividade(
            this.myForm.value.data_atividade,
            this.myForm.value.tipo_atividade,
            this.myForm.value.local_atividade,
            this.myForm.value.crianca_associada,
            localStorage.getItem('userId'),
            false,
        );
        this.registaAtividadeService.register(atividade)
            .subscribe(
                data => {
                    console.log(data),
                    window.alert("Atividade registada com sucesso!");
                    this.router.navigateByUrl('centralPage');
                },
                error => console.log(error)
            );
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            data_atividade: new FormControl(null, Validators.required),
            tipo_atividade: new FormControl(null, Validators.required),
            local_atividade: new FormControl(null, Validators.required),
            crianca_associada: new FormControl(null, Validators.required),
            turno: new FormControl(null,Validators.required)
            })
    }
}