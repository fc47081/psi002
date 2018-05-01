import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


import {CentralPageService} from "./centralPage.service";
import { AuthService } from "../auth/auth.service";

@Component({
    selector: 'app-centralPage',
    templateUrl: './centralPage.component.html'
})
export class CentralPageComponent{

    constructor(private authService: AuthService, private router: Router) {}

    onLogout() {
        this.authService.logout();
        this.router.navigate(['/auth', 'signin']);
    }

   
}