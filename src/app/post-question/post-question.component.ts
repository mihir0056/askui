import { Component, OnInit } from '@angular/core';
import { QuestionFormConfig } from '../question-form';
import { RestService } from '../rest-service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-post-question',
  templateUrl: './post-question.component.html',
  providers: [RestService]
})
export class PostQuestionComponent implements OnInit {
  model = new QuestionFormConfig();

  submitted = false;
  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
  }

  onSubmit(questionForm) {
    this.submitted = true;
    this.model.id = 0;
    this.model.curdate = new Date();
    this.rest.addQuestion(this.model).subscribe(result => {
    this.router.navigate(['questionlist']);
      }, err => {
        console.log(err);
      });
  }

}
