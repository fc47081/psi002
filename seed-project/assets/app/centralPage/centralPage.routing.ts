import {RouterModule, Routes} from "@angular/router";


const centralPage_ROUTES: Routes = [
    { path: '', redirectTo: 'centralPage', pathMatch: 'full' },

];

export const authRouting = RouterModule.forChild(centralPage_ROUTES);