import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(
        private _router: Router,
        private _authService: AuthService) { }

    canActivate() {
        // return true
        if (this._authService.isLoggedIn()) {
            // all ok, proceed navigation to routed component
            return true;
        }
        else {
            // redirect to the homepage
            this._router.navigate(['/auth/signin']);
            // abort current navigation
            return false;
        }
    }
}