import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page4Component } from './page4/page4.component';

import { ConfigModule } from '../../config.module';
import { RouterModule } from '@angular/router';

const page4Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'componente4'},
  { path: 'componente4', component: Page4Component, data: {componente : 'cuatro'} }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(page4Routes),
    ConfigModule
  ],
  declarations: [Page4Component]
})
export class Page4RoutingModule { }
