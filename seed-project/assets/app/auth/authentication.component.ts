import {Component} from "@angular/core";
import {AuthService} from "./auth.service";

@Component({
    selector: 'app-authentication',
    template: `
        <header class="row spacing">
            <nav class="row justify-content-md-center">
                <div class="col-md-4">
                <ul class="nav nav-tabs">
                    <li routerLinkActive="active"><a [routerLink]="['signup']">Registar</a></li>
                    <li routerLinkActive="active" *ngIf="!isLoggedIn()"><a [routerLink]="['signin']">Entrar</a></li>
                    <li routerLinkActive="active" *ngIf="isLoggedIn()"><a [routerLink]="['logout']">Logout</a></li>   
                </ul>
                </div>
            </nav>
        </header>
        <div class="row spacing">
            <router-outlet></router-outlet>
        </div>
    `
})
export class AuthenticationComponent {
    constructor(private authService: AuthService) {}

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}