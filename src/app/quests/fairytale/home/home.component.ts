import { Component } from '@angular/core';
import { intro } from '../../../intro';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
public intro = intro;
}
