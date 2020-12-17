import { Component, OnInit, OnDestroy } from '@angular/core';
import { newYearQuest } from '../../../fairytale';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators} from '@angular/forms';
import { questionValidator } from '../../../shared/validators/validators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit, OnDestroy {
public quest = newYearQuest;
public curretQuestionId = 0;
public queryParamsSubscription: Subscription;
public inputText: FormControl = new FormControl('', Validators.required);
  
    constructor(private route: ActivatedRoute,
                private router: Router) { }

public ngOnInit(): void {
    this.subscribeToQueryParams();
  }

public subscribeToQueryParams(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe((params) => {
      this.curretQuestionId = +params.qId || 0;
    });
  }

public nextQuestion(answer): void {
    if (this.inputText.invalid && answer.submitAnswer) {
      this.inputText.markAsTouched();
      return;
    }

    this.curretQuestionId = answer.redirect.id || 0;
    this.redirectTo('fairytale');
    this.resetInput();
  }

public setValidator(answer): void {
  this.inputText.setValidators(questionValidator(answer.correctAnswer));
  }

public resetInput(): void {
  this.inputText.setValue('');
  this.inputText.markAsPristine();
  this.inputText.markAsUntouched();
  }

public redirectTo(path: string): void {
  this.router.navigate([path], 
    { 
      queryParamsHandling: 'merge',
      queryParams: {qId: this.curretQuestionId }
    });
  }

public ngOnDestroy(): void {
  this.queryParamsSubscription.unsubscribe();
  }
}
