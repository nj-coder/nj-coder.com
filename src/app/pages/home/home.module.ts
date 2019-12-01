import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { TimelineComponent } from './timeline/timeline.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  }
];


@NgModule({
  declarations: [HomeComponent, TimelineComponent, FooterComponent], 
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
  ]
})
export class HomeModule { }
