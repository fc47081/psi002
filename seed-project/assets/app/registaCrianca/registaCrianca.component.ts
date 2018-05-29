import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegistaCriancaService} from "./registaCrianca.service";
import {Criancas} from "./crianca.model";
import {Router} from "@angular/router";

@Component({
    selector: 'regista-crianca',
    templateUrl: './registaCrianca.component.html'
})
export class RegistaCriancaComponent implements OnInit {
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
        this.registaCriancaService.register(crianca)
            .subscribe(
                data => {
                    console.log(data),
                    window.alert("Criança registada com sucesso!");
                    this.router.navigateByUrl('centralPage');
                },
                error => console.log(error)
            );
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            nome: new FormControl(null, Validators.required),
            sexo: new FormControl(null, Validators.required),
            data_de_nascimento: new FormControl(null, Validators.required),
            data_de_entrada: new FormControl(null, Validators.required),
            tipo_de_sangue: new FormControl(null, Validators.required),
            cc: new FormControl(null, [
                Validators.minLength(8),
                Validators.maxLength(8), 
                Validators.required
            ]),
            nif: new FormControl(null, [
                Validators.minLength(9),
                Validators.maxLength(9), 
                Validators.required
            ])
        })
    }
}