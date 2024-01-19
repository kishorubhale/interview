import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterviewchildComponent } from './interviewchild/interviewchild.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    InterviewchildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
