import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostQuestionComponent } from './post-question/post-question.component';
import { ListQuestionComponent } from './list-question/list-question.component';
import { AnswerListsComponent } from './answer-lists/answer-lists.component';
import { SubmitAnswerComponent } from './submit-answer/submit-answer.component';
const routes: Routes = [
  {
    path: 'ask',
    component: PostQuestionComponent
  },
  {
    path: 'questionlist',
    component: ListQuestionComponent
  },
  {
    path: 'questionlist/answerlist/:id',
    component: AnswerListsComponent
  },
  {
    path: 'answerform',
    component: SubmitAnswerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
