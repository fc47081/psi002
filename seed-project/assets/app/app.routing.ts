import {RouterModule, Routes} from "@angular/router";

import {MessagesComponent} from "./messages/messages.component";
import {AuthenticationComponent} from "./auth/authentication.component";

const APP_ROUTES: Routes =  [
    { path: '', redirectTo: '/auth/signin', pathMatch: 'full' },
    { path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);