import { Component } from '@angular/core';
import { newYearQuest } from '../../../fairytale';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {
public quest = newYearQuest;
}
