import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";   
import {Router} from "@angular/router";
import { User } from "../auth/user.model";
import { EditarDadosFuncionarioService } from "../editarDadosFuncionario/editarDadosFuncionario.service";

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
        console.log(user);
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            email: new FormControl(null),
            password: new FormControl(null),
            nome: new FormControl(null),
            idade: new FormControl(null),
            estatuto: new FormControl(null)
        })

        this.editarDadosFuncionarioService.getUserById(localStorage.getItem('userId'))
            .subscribe(
                (user: User) => {
                    console.log(user);
                }
            );
       
    }

    deleteCache(){
        this.router.navigateByUrl('centralPage');
        localStorage.removeItem('userId');
    }
}