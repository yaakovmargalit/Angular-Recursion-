import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecursionComponent } from './cmps/recursion/recursion.component';
import { StarComponent } from './cmps/star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    RecursionComponent,
    StarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
