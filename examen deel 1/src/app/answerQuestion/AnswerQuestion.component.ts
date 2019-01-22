/**
 * Created by abdel on 20-1-2019.
 */
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AskQuestion } from '../askQuestion/askQuestion';
import { AskQuestionService } from '../askQuestion/askQuestion.service';


@Component ({
  selector: 'answerSearch',
  templateUrl: './AnswerQuestion.component.html'
})

export class AnswerQuestionComponent {

  search: FormGroup;
  result_question: string;
  result_answer: string;
  calo: string;
  ingre: string;
  tijd: string;


  ngOnInit() {
    this.search = new FormGroup({
      name: new FormControl( " "),
      aantal: new FormControl( " "),
      ingre: new FormControl( " "),
      tijd: new FormControl(" "),
    });
  }

  constructor(private askQuestionService: AskQuestionService) {}

  onSubmit() {
    this.result_answer = this.askQuestionService.searchAnswer(this.search.value.name,this.search.value.aantal,
        this.search.value.ingre,this.search.value.tijd);

  }
}
