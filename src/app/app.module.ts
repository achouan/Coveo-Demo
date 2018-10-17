import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { MessagesComponent } from './messages/messages.component';
import { ResultSearchComponent } from './result-search/result-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    MessagesComponent,
    ResultSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
