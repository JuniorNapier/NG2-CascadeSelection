import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CarMakeSelectComponent } from './cmp/car-make/car-make';
import { CarModelSelectComponent } from './cmp/car-model/car-model';

import { DataService } from './services/data/data';

@NgModule({
  declarations: [
    AppComponent,
    CarMakeSelectComponent,
    CarModelSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
