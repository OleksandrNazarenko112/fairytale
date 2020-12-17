import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, QuestionsComponent } from './quests/fairytale';


const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{ path: 'fairytale',
  component: QuestionsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
