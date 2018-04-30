import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {CentralPageComponent} from "./centralPage.component";
import {centralPageRouting} from "./centralPage.routing";


@NgModule({
    declarations: [
        CentralPageComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        centralPageRouting
    ],
})
export class CentralPageModule {

}