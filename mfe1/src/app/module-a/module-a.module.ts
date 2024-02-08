import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent, HelloService } from 'ngx-my-components';
import { HomeComponent } from './home/home.component';
import { FrenchHelloService } from './french.hello.service';

export const MODULE_A_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'feature',
    component: FeatureComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(MODULE_A_ROUTES)
  ],
  providers: [
    {
      provide: HelloService,
      useClass: FrenchHelloService
    }
  ],
})
export class ModuleAModule { }

// The below line is required to be able to load your module into appshell, and "MfeModule" can not be changed
export { ModuleAModule as MfeModule };
