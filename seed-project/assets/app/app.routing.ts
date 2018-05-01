import {RouterModule, Routes} from "@angular/router";

import {MessagesComponent} from "./messages/messages.component";
import {AuthenticationComponent} from "./auth/authentication.component";
import { CentralPageComponent } from "./centralPage/centralPage.component";
import { RegistaCriancaComponent } from "./registaCrianca/registaCrianca.component";
import { LoggedInGuard } from "./logged-in.guard";

const APP_ROUTES: Routes =  [
    { path: '', redirectTo: '/auth/signin', pathMatch: 'full' },
    { path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule' },
    { path: 'centralPage', component: CentralPageComponent, canActivate: [LoggedInGuard]},
    { path: 'registaCrianca', component: RegistaCriancaComponent, canActivate: [LoggedInGuard]},
    { path: '**', redirectTo: '/centralPage' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);