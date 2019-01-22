import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {AnswerQuestionComponent} from "./answerQuestion/AnswerQuestion.component";
import {AskQuestionService} from "./askQuestion/askQuestion.service";

// define the routes
const appRoutes: Routes = [
  {path: '**', component: AnswerQuestionComponent}];



@NgModule({
  imports: [BrowserModule, HttpClientModule,
    FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent,AnswerQuestionComponent],
  providers: [AskQuestionService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
