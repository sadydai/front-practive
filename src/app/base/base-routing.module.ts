import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BaseComponent} from './base.component';


const routes: Routes = [
    {
        path: '',
        component: BaseComponent,
        children: [
            {
                path: 'overview',
                loadChildren: '../overview/overview.module#OverviewModule'
            },
            {
                path: 'manage',
                loadChildren: '../manage/manage.module#ManageModule'
            },
            {
                path: 'data',
                loadChildren: '../data/data.module#DataModule'
            },
            {
                path:'',
                loadChildren: '../overview/overview.module#OverviewModule'
            }

        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BaseRoutingModule {
}
