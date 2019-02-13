import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest-service';
@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  providers: [RestService]
})
export class ListQuestionComponent implements OnInit {
  questionLists: any = [];
  constructor(public rest: RestService) { }

  ngOnInit() {
    this.getQuestionLists();
  }
  getQuestionLists() {
    this.questionLists = [];
    this.rest.getQuestionLists().subscribe((data) => {
      if (data && data.content.length > 0) {
        this.questionLists = data.content;
      }

    });
  }
}
