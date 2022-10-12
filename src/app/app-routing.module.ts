import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
import {ProdAddComponent} from './prod-add/prod-add.component';
import {ProdGetComponent} from './prod-get/prod-get.component';
import {ProdEditComponent} from './prod-edit/prod-edit.component';

const routes: Routes = [
  {path: 'prod-add', component: ProdAddComponent},
  {path: 'prod-get', component: ProdGetComponent},
  {path: 'prod-edit', component: ProdEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
