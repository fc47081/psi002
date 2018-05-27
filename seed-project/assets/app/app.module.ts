import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
import { AuthService } from "./auth/auth.service";
import { CentralPageService } from "./centralPage/centralPage.service";
import { CentralPageComponent } from "./centralPage/centralPage.component";
import { RegistaCriancaService } from './registaCrianca/registaCrianca.service';
import { RegistaCriancaComponent } from './registaCrianca/registaCrianca.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoggedInGuard } from './logged-in.guard';
import { RegistaAtividadeComponent } from './registaAtividade/registaAtividade.component';
import { RegistaAtividadeService } from './registaAtividade/registaAtividade.service';
import { RegistaOcorrenciaComponent } from './registaOcorrencia/registaOcorrencia.component';
import { RegistaOcorrenciaService } from './registaOcorrencia/registaOcorrencia.service';
import { LivroOcorrenciasComponent } from './livroOcorrencias/livroOcorrencias.component';
import { LivroOcorrenciasService } from './livroOcorrencias/livroOcorrencias.service';
import { EditarDadosCriancaComponent } from './editarDadosCrianca/editarDadosCrianca.component';
import { EditarDadosCriancaService } from './editarDadosCrianca/editarDadosCrianca.service';

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        CentralPageComponent,
        RegistaCriancaComponent,
        RegistaAtividadeComponent,
        RegistaOcorrenciaComponent,
        LivroOcorrenciasComponent,
        EditarDadosCriancaComponent,
    ],
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        CommonModule,
        ReactiveFormsModule,
    ],
    providers: [AuthService, CentralPageService, RegistaCriancaService,RegistaAtividadeService,RegistaOcorrenciaService,LivroOcorrenciasService, EditarDadosCriancaService, LoggedInGuard],
    bootstrap: [AppComponent]
})
export class AppModule {

}