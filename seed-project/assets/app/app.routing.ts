import {RouterModule, Routes} from "@angular/router";

import {MessagesComponent} from "./messages/messages.component";
import {AuthenticationComponent} from "./auth/authentication.component";
import { CentralPageComponent } from "./centralPage/centralPage.component";
import { RegistaCriancaComponent } from "./registaCrianca/registaCrianca.component";
import { LoggedInGuard } from "./logged-in.guard";
import { RegistaAtividadeComponent } from "./registaAtividade/registaAtividade.component";
import { RegistaOcorrenciaComponent } from "./registaOcorrencia/registaOcorrencia.component";
import { LivroOcorrenciasComponent } from "./livroOcorrencias/livroOcorrencias.component";
import { EditarDadosCriancaComponent } from "./editarDadosCrianca/editarDadosCrianca.component";


const APP_ROUTES: Routes =  [
    { path: '', redirectTo: '/centralPage', pathMatch: 'full' },
    { path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule' },
    { path: 'centralPage', component: CentralPageComponent, canActivate: [LoggedInGuard]},
    { path: 'registaCrianca', component: RegistaCriancaComponent, canActivate: [LoggedInGuard]},
    { path: 'atividades', component: RegistaAtividadeComponent, canActivate: [LoggedInGuard]},  
    { path: 'registaOcorrencia', component: RegistaOcorrenciaComponent , canActivate: [LoggedInGuard]},
    { path: 'livroOcorrencias', component: LivroOcorrenciasComponent , canActivate: [LoggedInGuard]},
    { path: 'editarDadosCrianca', component: EditarDadosCriancaComponent , canActivate: [LoggedInGuard]},
    { path: '**', redirectTo: '/centralPage' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);