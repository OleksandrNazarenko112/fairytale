import { Component, OnInit, OnDestroy } from '@angular/core';
import { newYearQuest } from '../../fairytale';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
public quest = newYearQuest;
public curretQuestionId = 0;
public queryParamsSubscription: Subscription;

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

public nextQuestion(index: number): void {
  this.curretQuestionId = index || 0;
  this.redirectTo('');
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
