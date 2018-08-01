import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './auth/auth.service';
const ROUTES: Routes = [
    {
        path: 'base',
        loadChildren: './base/base.module#BaseModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
        canLoad: [AuthGuard]
    },
    {
        path: '',
        redirectTo: 'base',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
