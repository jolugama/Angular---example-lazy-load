import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page3Component } from './page3/page3.component';

import { ConfigModule } from '../../config.module';
import { RouterModule } from '@angular/router';

const page3Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'componente3'},
  { path: 'componente3', component: Page3Component, data: {componente : 'tres'} }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(page3Routes),
    ConfigModule
  ],
  declarations: [Page3Component]
})
export class Page3RoutingModule { }
