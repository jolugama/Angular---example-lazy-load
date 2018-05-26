import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page2Component } from './page2/page2.component';

import { ConfigModule } from '../../config.module';
import { RouterModule } from '@angular/router';

const page2Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'componente2'},
  { path: 'componente2', component: Page2Component, data: {componente : 'dos'} }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(page2Routes),
    ConfigModule
  ],
  declarations: [Page2Component]
})
export class Page2RoutingModule { }
