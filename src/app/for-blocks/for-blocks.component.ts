import { Component, OnInit } from '@angular/core';
import { ChoicesService, Choice } from '../services/choices.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-for-blocks',
  templateUrl: './for-blocks.component.html',
  styleUrls: ['./for-blocks.component.scss']
})
export class ForBlocksComponent implements OnInit {
  choices$: Observable<Choice[]> | undefined;
  selectedChoice = {
    emotion: 'joy',
    title: 'Receives assignment for a new feature request.',
    img: '/assets/images/a-day-begins-new-feature.jpg',
  };
  constructor(private choicesService: ChoicesService) { }

  ngOnInit(): void {
    this.choices$ = this.choicesService.getChoices().pipe();
  }
  getSelection(choice: Choice) {
    this.selectedChoice = choice;
  }
}
