import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverviewComponent} from './overview.component';
import {Routes, RouterModule} from '@angular/router';
const router: Routes = [
    {
        path: '',
        component: OverviewComponent
    }
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(router)
    ],
    exports: [RouterModule],
    declarations: [OverviewComponent]
})

export class OverviewModule {
}
