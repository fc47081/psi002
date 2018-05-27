import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";   
import {Router} from "@angular/router";
import { Criancas } from "../registaCrianca/crianca.model";
import { RegistaCriancaService } from "../registaCrianca/registaCrianca.service";

@Component({
    selector: 'editar-dados-crianca',
    templateUrl: './editarDadosCrianca.component.html'
})
export class EditarDadosCriancaComponent implements OnInit {
    crianca: Criancas;
    myForm: FormGroup;

    constructor(private registaCriancaService: RegistaCriancaService, private router: Router) {}

    onSubmit() {
        const crianca = new Criancas(
            this.myForm.value.nome,
            this.myForm.value.sexo,
            this.myForm.value.data_de_nascimento,
            this.myForm.value.data_de_entrada,
            this.myForm.value.tipo_de_sangue,
            this.myForm.value.cc,
            this.myForm.value.nif, 
            localStorage.getItem('userId'),
        );
        console.log(crianca);
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            nome: new FormControl(null),
            sexo: new FormControl(null),
            data_de_nascimento: new FormControl(null),
            data_de_entrada: new FormControl(null),
            tipo_de_sangue: new FormControl(null),
            cc: new FormControl(null),
            nif: new FormControl(null)
        })

        this.registaCriancaService.getCriancaById(localStorage.getItem('criancaId'))
            .subscribe(
                (crianca: Criancas) => {
                    console.log(crianca);
                }
            );
       
    }

    deleteCache(){
        this.router.navigateByUrl('centralPage');
        localStorage.removeItem('criancaId');
    }
}