import {RouterModule, Routes} from "@angular/router";

import {MessagesComponent} from "./messages/messages.component";
import {AuthenticationComponent} from "./auth/authentication.component";
import { CentralPageComponent } from "./centralPage/centralPage.component";

const APP_ROUTES: Routes =  [
    { path: '', redirectTo: '/auth/signin', pathMatch: 'full' },
    { path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule' },
    { path: 'centralPage', component: CentralPageComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);