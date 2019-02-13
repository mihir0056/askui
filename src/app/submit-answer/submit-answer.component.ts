import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AnsFormConfig } from '../ans-form';
import { RestService } from '../rest-service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-submit-answer',
  templateUrl: './submit-answer.component.html',
  providers: [RestService]
})
export class SubmitAnswerComponent implements OnInit {
  @Output() answered = new EventEmitter<boolean>();
  answer = '';
  model = new AnsFormConfig();
  constructor(public rest: RestService, private route: ActivatedRoute ) { }

  ngOnInit() {
  }
  submitanswer() {
    this.model.id = 0;
    this.model.problemId = this.route.snapshot.params['id'];
    this.rest.addAnswer(this.model).subscribe(result => {
      this.answered.emit(false);
    }, err => {
    });

  }

}
