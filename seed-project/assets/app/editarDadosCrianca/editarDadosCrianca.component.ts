import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";   
import {Router} from "@angular/router";
import { Criancas } from "../registaCrianca/crianca.model";
import { RegistaCriancaService } from "../registaCrianca/registaCrianca.service";
import { DatePipe } from "@angular/common";

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
        this.registaCriancaService.updateCrianca(crianca)
        .subscribe(
            data => {
                window.alert("Criança atualizada com sucesso!");
                localStorage.removeItem('criancaId');
                this.router.navigateByUrl('centralPage');
            },
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
            cc: new FormControl(null, Validators.required),
            nif: new FormControl(null, Validators.required)
        })

        this.registaCriancaService.getCriancaById(localStorage.getItem('criancaId'))
            .subscribe(
                (crianca: Criancas) => {
                    this.crianca = crianca;
                    var datePipe = new DatePipe("en-US");
                    this.myForm.setValue({ 
                        nome: crianca[0].nome,
                        sexo: crianca[0].sexo,
                        data_de_nascimento: datePipe.transform(crianca[0].data_de_nascimento, 'yyyy-MM-dd'),
                        data_de_entrada: datePipe.transform(crianca[0].data_de_entrada, 'yyyy-MM-dd'),
                        tipo_de_sangue: crianca[0].tipo_de_sangue,
                        cc: crianca[0].cc,
                        nif: crianca[0].nif
                    });
                }
            );
    }

    deleteCrianca(){
    this.registaCriancaService.deleteCrianca(localStorage.getItem('criancaId'))
        .subscribe(
            data => {
                window.alert("Criança eliminada com sucesso!");
                localStorage.removeItem('criancaId');
                this.router.navigateByUrl('centralPage');
            },
        );
    }

    deleteCache(){
        localStorage.removeItem('criancaId');
        this.router.navigateByUrl('centralPage');
    }
}