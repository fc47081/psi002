import { Component, OnInit } from '@angular/core';
import { Crianca } from '../models';
import {MessageService} from "./messages/message.service";
//import { CriancaService } from './crianca.service';
//import { FuncionarioService } from './funcionario.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [MessageService]
})
export class AppComponent {

}