import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigModule } from '../../config.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { Page1Component } from './page1/page1.component';

const page1Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'componente1'},
  { path: 'componente1', component: Page1Component, data: {componente : 'uno'} }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(page1Routes),
    ConfigModule,
    SharedModule
  ],
  declarations: [Page1Component]
})
export class Page1RoutingModule { }





