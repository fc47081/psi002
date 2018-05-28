import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";   
import {Router} from "@angular/router";
import { User } from "../auth/user.model";
import { EditarDadosFuncionarioService } from "../editarDadosFuncionario/editarDadosFuncionario.service";
import { DatePipe } from "@angular/common";

@Component({
    selector: 'editar-dados-funcionario',
    templateUrl: './editarDadosFuncionario.component.html'
})
export class EditarDadosFuncionarioComponent implements OnInit {
    user: User;
    myForm: FormGroup;

    constructor(private editarDadosFuncionarioService: EditarDadosFuncionarioService, private router: Router) {}

    onSubmit() {
        const user = new User(
            this.myForm.value.email,
            this.myForm.value.password,
            this.myForm.value.nome,
            this.myForm.value.idade,
            this.myForm.value.estatuto, 
        );
        this.editarDadosFuncionarioService.updateUser(user)
        .subscribe(
            data => {
                window.alert("Utilizador atualizado com sucesso!");
                this.router.navigateByUrl('centralPage');
            },
        );
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            nome: new FormControl(null, Validators.required),
            idade: new FormControl(null, Validators.required),
            estatuto: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])")
            ]),
            password: new FormControl(null, Validators.required)
        })

        this.editarDadosFuncionarioService.getUserById(localStorage.getItem('userId'))
            .subscribe(
                (user: User) => {
                    this.user = user;
                    console.log(user[0].password)
                    var datePipe = new DatePipe("en-US");
                    this.myForm.setValue({ 
                        nome: user[0].nome,
                        idade: user[0].idade,
                        estatuto: user[0].estatuto,
                        email: user[0].email,
                        password: user[0].password
                    });
                }
            );  
    }
}