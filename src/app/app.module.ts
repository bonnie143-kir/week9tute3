import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import {HttpClientModule} from '@angular/common/http';
// need to import and put into the imports list @NgModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdAddComponent } from './prod-add/prod-add.component';
import { ProdGetComponent } from './prod-get/prod-get.component';
import { ProdEditComponent } from './prod-edit/prod-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdAddComponent,
    ProdGetComponent,
    ProdEditComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
