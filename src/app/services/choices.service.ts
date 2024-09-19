import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Choice {
  id: number;
  emotion: string;
  title: string;
  img: string;
};

@Injectable({
  providedIn: 'root'
})
export class ChoicesService {

  constructor() { }
  getChoices(): Observable<Choice[]> {
    return of([
      {
        id: 1,
        emotion: 'joy',
        title: 'Receives assignment for a new feature request.',
        img: '/assets/images/a-day-begins-new-feature.jpg',
      },
      {
        id: 2,
        emotion: 'determination',
        title: 'The work begins.',
        img: '/assets/images/b-the-work-begins.jpg',
      },
      {
        id: 3,
        emotion: 'confusion',
        title: 'What is the best control flow block to use?',
        img: '/assets/images/c-then-confusion.jpg',
      },
      {
        id: 4,
        emotion: 'resolution',
        title: 'I am going to use a for block.',
        img: '/assets/images/g-then-clarity.jpg',
      },
      {
        id: 5,
        emotion: 'anger',
        title: 'I should have used an if block.',
        img: '/assets/images/d-then-anger.jpg',
      },
      {
        id: 6,
        emotion: 'despair',
        title: 'I need to rewrite all this code.',
        img: '/assets/images/e-then-despair.jpg',
      },
      {
        id: 7,
        emotion: 'doubt',
        title: 'Maybe I should use a switch block.',
        img: '/assets/images/doubt.jpg',
      },
      {
        id: 8,
        emotion: 'hysterical',
        title: 'This is driving me nuts!',
        img: '/assets/images/h-hysterical.jpg',
      },
      {
        id: 9,
        emotion: 'apathy',
        title: 'Does it really matter?',
        img: '/assets/images/apathy.jpg',
      },
      {
        id: 10,
        emotion: 'excited',
        title: 'Any of these blocks will work!',
        img: '/assets/images/i-problem-solved.jpg',
      },
      {
        id: 11,
        emotion: 'anticipation',
        title: 'I am ready for the next feature.',
        img: '/assets/images/j-ready-for-the-next-assignment.jpg',
      },
    ]);
  }
}
