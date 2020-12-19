import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators} from '@angular/forms';
import { questionValidator } from '../../validators/validators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-questions-iterator',
  templateUrl: './questions-iterator.component.html',
  styleUrls: ['./questions-iterator.component.scss']
})
export class QuestionsIteratorComponent implements OnInit, OnDestroy {
@Input() public quest;
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

public nextQuestion(answer, link?): void {
    if (link) {
      this.router.navigate([link]);
      return;
    }
    
    if (this.inputText.invalid && answer.submitAnswer) {
      this.inputText.markAsTouched();
      return;
    }

    this.curretQuestionId = answer.redirect.id || 0;
    this.redirect();
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

public redirect(): void {
  this.router.navigate([], 
    { 
      queryParamsHandling: 'merge',
      queryParams: {qId: this.curretQuestionId }
    });
  }

public ngOnDestroy(): void {
  this.queryParamsSubscription.unsubscribe();
  }
}
