import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';

import { ServiceService } from './services/service.service'; 

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
