import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  }
];


@NgModule({
  declarations: [HomeComponent, TimelineComponent], 
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class HomeModule { }
