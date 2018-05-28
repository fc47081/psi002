import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CentralPageService} from "./centralPage.service";
import { AuthService } from "../auth/auth.service";
import { RegistaCriancaService } from "../registaCrianca/registaCrianca.service";
import { Criancas } from "../registaCrianca/crianca.model";
import { User } from "../auth/user.model";

@Component({
    selector: 'app-centralPage',
    templateUrl: './centralPage.component.html'
})
export class CentralPageComponent implements OnInit {

    criancas: Criancas[];
    user: User;
    constructor(private authService: AuthService, private registaCriancaService: RegistaCriancaService, private router: Router) {}

    onLogout() {
        this.authService.logout();
        this.router.navigate(['/auth', 'signin']);
    }

    ngOnInit() {
            this.registaCriancaService.getCriancas()
            .subscribe(
                (criancas: Criancas[]) => {
                    this.criancas = criancas;
                }
            );

            this.authService.getUserById(localStorage.getItem('userId'))
            .subscribe(
                (user: User) => {
                    this.user = user;
                }
            );
    }

    onSubmit(id) {
        localStorage.setItem('criancaId', id);
        this.router.navigateByUrl('editarDadosCrianca');
    }

    onSuperMegaClick(){
        this.router.navigateByUrl('editarDadosFuncionario');
    }
}