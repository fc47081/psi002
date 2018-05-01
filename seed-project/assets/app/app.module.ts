import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
import { AuthService } from "./auth/auth.service";
import { CentralPageService } from "./centralPage/centralPage.service";
import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";
import { CentralPageComponent } from "./centralPage/centralPage.component";
import { RegistaCriancaService } from './registaCrianca/registaCrianca.service';
import { RegistaCriancaComponent } from './registaCrianca/registaCrianca.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoggedInGuard } from './logged-in.guard';


@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        ErrorComponent,
        CentralPageComponent,
        RegistaCriancaComponent,
    ],
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        CommonModule,
        ReactiveFormsModule,
    ],
    providers: [AuthService, ErrorService, CentralPageService, RegistaCriancaService, LoggedInGuard],
    bootstrap: [AppComponent]
})
export class AppModule {

}