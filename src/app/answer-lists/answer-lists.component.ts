import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest-service';
import { ActivatedRoute, Router } from '@angular/router';
import { SubmitAnswerComponent} from '../submit-answer/submit-answer.component';
@Component({
  selector: 'app-answer-lists',
  templateUrl: './answer-lists.component.html',
  providers: [RestService]
})
export class AnswerListsComponent implements OnInit {

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }
  answers: any = [];
  questionandanswer = {};
  addanswer =  false;
  ngOnInit() {
    this.getAnswerPerQues();
  }
  getAnswerPerQues() {
    this.rest.getAnswerPerQues(this.route.snapshot.params['id']).subscribe((data: {}) => {
      this.questionandanswer = data;

    });
  }
  answerthis() {
    this.addanswer = true;
  }
  onAnswered(answered){
    this.addanswer = answered;
    this.getAnswerPerQues();
  }

}
