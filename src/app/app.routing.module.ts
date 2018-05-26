import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ConfigModule } from './config.module';
import { SinLazyLoadComponent } from './components/sin-lazy-load/sin-lazy-load.component';


const routes = [
  {
    path: 'sinLazy',
    component: SinLazyLoadComponent
  },
  {
    path: 'pagina1',
    loadChildren: './pages/+page1/page1.routing.module#Page1RoutingModule',
    data : {number : '1'}
  },
  {
    path: 'pagina2',
    loadChildren: './pages/+page2/page2.routing.module#Page2RoutingModule',
    data : {number : '2'}
  },
  {
    path: 'pagina3',
    loadChildren: './pages/+page3/page3.routing.module#Page3RoutingModule',
    data : {number : '3'}
  },
  {
    path: 'pagina4',
    loadChildren: './pages/+page4/page4.routing.module#Page4RoutingModule',
    data : {number : '4'}
  },
 { path: '**', pathMatch: 'full', redirectTo: 'sinLazy' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ConfigModule
  ],
  declarations: [SinLazyLoadComponent],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
