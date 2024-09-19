import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../services/marvel.service';
import { map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-defer-blocks',
  templateUrl: './defer-blocks.component.html',
  styleUrls: ['./defer-blocks.component.scss']
})
export class DeferBlocksComponent implements OnInit {
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

  getCharacterComics(id: number) {
    this.comics$ = this.marvelService.getCharacterComicsById(id).pipe(
      map((response: any) => response.data.results),
    );
  }
  // https://angular.dev/guide/defer
  // https://angular.dev/api/core/@defer
  // https://blog.angular-university.io/angular-defer/
  // https://dev.to/luishcastroc/understanding-the-new-control-flow-and-deferred-loading-in-angular-26kh
  // https://developer.marvel.com/docs#!/public

}
