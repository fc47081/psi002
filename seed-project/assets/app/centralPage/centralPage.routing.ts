import {RouterModule, Routes} from "@angular/router";
import {CentralPageComponent} from "./centralPage.component";


const centralPage_ROUTES: Routes = [
    { path: '', redirectTo: 'centralPage', pathMatch: 'full' },
    { path: 'centralPage', component: CentralPageComponent }

];

export const centralPageRouting = RouterModule.forChild(centralPage_ROUTES);