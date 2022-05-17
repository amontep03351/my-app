import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './component/add-book/add-book.component';
import { DetailBookComponent } from './component/detail-book/detail-book.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    DetailBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
