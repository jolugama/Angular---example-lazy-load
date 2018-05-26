import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from '../config.module';

// necesario para enrutar
import { RouterModule } from '@angular/router';


import { MenuComponent } from './menu/menu.component';


@NgModule({
  imports: [
    CommonModule,
    ConfigModule,
    RouterModule
  ],
  declarations: [MenuComponent],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
