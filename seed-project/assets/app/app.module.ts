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


@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        ErrorComponent,
        CentralPageComponent
    ],
    imports: [
        BrowserModule,
        routing,
        HttpModule,
    ],
    providers: [AuthService, ErrorService, CentralPageService],
    bootstrap: [AppComponent]
})
export class AppModule {

}