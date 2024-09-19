import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';
import { map, Observable, tap } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ComicComponent } from '../comic/comic.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    ComicComponent,
    MatCardModule,
  ],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss'
})
export class CharacterListComponent implements OnInit {
  characters$: Observable<any> | undefined;
  comics$: Observable<any> | undefined;
  isLoading = true;
  constructor(private marvelService: MarvelService) { }
  ngOnInit() {
    this.characters$ = this.marvelService.getCharacters().pipe(
      map((response: any) => response.data.results),
      tap(() => this.isLoading = false),
    );
  }
}
