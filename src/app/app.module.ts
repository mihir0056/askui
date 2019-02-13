import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostQuestionComponent } from './post-question/post-question.component';
import { ListQuestionComponent } from './list-question/list-question.component';
import { AnswerListsComponent } from './answer-lists/answer-lists.component';
import { SubmitAnswerComponent } from './submit-answer/submit-answer.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    PostQuestionComponent,
    ListQuestionComponent,
    AnswerListsComponent,
    SubmitAnswerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
